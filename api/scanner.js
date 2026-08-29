const BASE='https://fapi.binance.com';
const MIN_QV=5e7;
export const config={regions:['gru1'],maxDuration:30};
const pct=(a,b)=>b?((a-b)/b)*100:0;
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
async function j(url){const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0','accept':'application/json'},cache:'no-store'});if(!r.ok){const body=await r.text().catch(()=>"");throw new Error(`${r.status} ${body.slice(0,120)}`)}return r.json()}
function ema(values,p){const k=2/(p+1);let e=values[0];for(let i=1;i<values.length;i++)e=values[i]*k+e*(1-k);return e}
function atr(klines,p=14){const trs=[];for(let i=1;i<klines.length;i++){const h=+klines[i][2],l=+klines[i][3],pc=+klines[i-1][4];trs.push(Math.max(h-l,Math.abs(h-pc),Math.abs(l-pc)))}return trs.slice(-p).reduce((a,b)=>a+b,0)/Math.min(p,trs.length)}
async function metrics(t){const s=t.symbol;try{const [oi,k,funding]=await Promise.all([
 j(`${BASE}/futures/data/openInterestHist?symbol=${s}&period=1h&limit=5`),
 j(`${BASE}/fapi/v1/klines?symbol=${s}&interval=1h&limit=80`),
 j(`${BASE}/fapi/v1/premiumIndex?symbol=${s}`)
]);
if(!Array.isArray(oi)||oi.length<2||!Array.isArray(k)||k.length<30)return null;
const oa=oi[oi.length-2],ob=oi[oi.length-1];
const closes=k.map(x=>+x[4]);
const last=k[k.length-2],prev=k[k.length-3];
const price=+last[4];
const oi1h=pct(+ob.sumOpenInterestValue,+oa.sumOpenInterestValue);
const vol1h=pct(+last[7],+prev[7]);
const price1h=pct(+last[4],+last[1]);
const p24=+t.priceChangePercent;
const e20=ema(closes.slice(-40),20),e50=ema(closes.slice(-70),50);
const trend=((price/e20)-1)*100 + ((e20/e50)-1)*100;
const a=atr(k,14),atrPct=price?100*a/price:0;
const fr=+(funding.lastFundingRate||0)*100;
const momentum=clamp(50+p24*2+price1h*4,0,100);
const trendScore=clamp(50+trend*12,0,100);
const participation=clamp(50+Math.max(-20,Math.min(20,vol1h))/2+Math.max(-10,Math.min(10,oi1h))*2,0,100);
const derivatives=clamp(55+oi1h*3-Math.abs(fr)*180,0,100);
const volScore=clamp(80-Math.max(0,atrPct-2)*8,20,100);
const score=clamp(trendScore*.25+momentum*.2+participation*.2+derivatives*.2+volScore*.15,0,100);
let direction=score>=57&&trend>=0?'LONG':score<=43&&trend<0?'SHORT':'WATCH';
let read='Mixed / wait for confirmation';
if(direction==='LONG'&&oi1h>0&&vol1h>0)read='Bullish trend + participation';
else if(direction==='LONG')read='Trend-led long setup';
else if(direction==='SHORT'&&oi1h>0)read='Bearish trend + fresh leverage';
else if(direction==='SHORT')read='Bearish momentum setup';
const risk=Math.max(a*1.25,price*.012);
const entryLow=direction==='SHORT'?price:price-risk*.25;
const entryHigh=direction==='SHORT'?price+risk*.25:price;
const stop=direction==='SHORT'?price+risk:price-risk;
const tp1=direction==='SHORT'?price-risk*1.5:price+risk*1.5;
const tp2=direction==='SHORT'?price-risk*2.5:price+risk*2.5;
const grade=score>=82?'A+':score>=72?'A':score>=62?'B':score>=52?'C':'WATCH';
return {symbol:s.replace('USDT',''),price,oi1h,vol1h,price1h,price24h:p24,quoteVolume:+t.quoteVolume,funding:fr,atrPct,trend,score,grade,direction,read,entryLow,entryHigh,stop,tp1,tp2,rr:2.5,components:{trend:trendScore,momentum,participation,derivatives,volatility:volScore}}}catch(e){return null}}
export default async function handler(req,res){try{res.setHeader('Cache-Control','s-maxage=180, stale-while-revalidate=420');res.setHeader('Access-Control-Allow-Origin','*');const tickers=await j(`${BASE}/fapi/v1/ticker/24hr`);const liquid=tickers.filter(x=>x.symbol.endsWith('USDT')&&+x.quoteVolume>=MIN_QV&&!x.symbol.includes('_')).sort((a,b)=>+b.quoteVolume-+a.quoteVolume).slice(0,45);const rows=(await Promise.all(liquid.map(metrics))).filter(Boolean);if(rows.length<5)throw new Error(`Only ${rows.length} futures contracts returned usable data from ${process.env.VERCEL_REGION||'unknown region'}`);const ranked=[...rows].sort((a,b)=>b.score-a.score).slice(0,30);const topOI=[...rows].filter(x=>x.oi1h>0).sort((a,b)=>b.oi1h-a.oi1h).slice(0,5);const confluence=[...rows].filter(x=>x.oi1h>0&&x.vol1h>0).sort((a,b)=>b.score-a.score).slice(0,5);res.status(200).json({updatedAt:new Date().toISOString(),region:process.env.VERCEL_REGION||null,universe:rows.length,minQuoteVolume:MIN_QV,ranked,topOI,confluence});}catch(e){res.status(500).json({error:e.message,region:process.env.VERCEL_REGION||null})}}
