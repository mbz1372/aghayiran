"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowLeft,Check,RotateCcw,Sparkles} from "lucide-react";

const colors=[
 {name:"مشکی کربنی",value:"#101418",accent:"#d7ff3f"},
 {name:"سبز جنگلی",value:"#0b4a38",accent:"#f3c759"},
 {name:"خاکی صحرا",value:"#a88963",accent:"#101418"},
 {name:"آبی مسابقه",value:"#174ea6",accent:"#f7f7f4"},
];
const setups=[
 {name:"Urban Flow",price:18500000,tyre:"تایر شهری سریع",bar:"فرمان راحت",tag:"روزمره"},
 {name:"Trail Ready",price:36500000,tyre:"تایر آج‌دار ۲.۴",bar:"فرمان کنترل",tag:"کوهستان"},
 {name:"Road Attack",price:64500000,tyre:"تایر 700C",bar:"فرمان دراپ",tag:"سرعت"},
];
export default function RideStudio(){
 const [color,setColor]=useState(0);const [setup,setSetup]=useState(1);const [size,setSize]=useState("M");
 const total=useMemo(()=>setups[setup].price+(size==="XL"?900000:0),[setup,size]);
 return <div className="studio-grid">
  <div className="bike-stage" style={{"--bike":colors[color].value,"--bike-accent":colors[color].accent} as React.CSSProperties}>
   <div className="stage-orbit orbit-one"/><div className="stage-orbit orbit-two"/>
   <div className="bike-art" aria-label="پیش‌نمایش دوچرخه">
    <div className="wheel wheel-back"/><div className="wheel wheel-front"/>
    <div className="frame-line frame-a"/><div className="frame-line frame-b"/><div className="frame-line frame-c"/><div className="frame-line frame-d"/>
    <div className="fork"/><div className="handle"/><div className="seat"/><div className="crank"/>
   </div>
   <div className="stage-label"><span>LIVE CONFIGURATION</span><b>{setups[setup].name}</b></div>
  </div>
  <div className="studio-panel">
   <span className="eyebrow text-forest"><Sparkles size={15}/> A.I. BIKE STUDIO</span>
   <h3>دوچرخه را برای خودت بساز.</h3>
   <p className="muted">رنگ، سبک استفاده و سایز را انتخاب کن؛ قیمت و پیشنهاد تجهیزات همان لحظه به‌روزرسانی می‌شود.</p>
   <div className="studio-block"><b>رنگ فریم</b><div className="swatches">{colors.map((c,i)=><button key={c.name} onClick={()=>setColor(i)} className={`swatch ${color===i?"selected":""}`} style={{background:c.value}} aria-label={c.name}>{color===i&&<Check size={16}/>}</button>)}</div><small>{colors[color].name}</small></div>
   <div className="studio-block"><b>نوع استفاده</b><div className="setup-list">{setups.map((s,i)=><button key={s.name} onClick={()=>setSetup(i)} className={setup===i?"selected":""}><span>{s.tag}</span><b>{s.name}</b><small>{s.tyre} · {s.bar}</small></button>)}</div></div>
   <div className="studio-block"><b>سایز پیشنهادی</b><div className="size-row">{["S","M","L","XL"].map(s=><button key={s} onClick={()=>setSize(s)} className={size===s?"selected":""}>{s}</button>)}</div></div>
   <div className="studio-total"><div><small>قیمت کانفیگ</small><b>{new Intl.NumberFormat("fa-IR").format(total)} تومان</b></div><Link href="/shop" className="btnx btn-dark">دیدن مدل‌ها <ArrowLeft size={18}/></Link></div>
   <button className="studio-reset" onClick={()=>{setColor(0);setSetup(1);setSize("M")}}><RotateCcw size={15}/> بازنشانی استودیو</button>
  </div>
 </div>
}
