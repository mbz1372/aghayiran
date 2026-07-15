"use client";
import Link from "next/link";
import {Menu,Search,ShoppingBag,User} from "lucide-react";
import {useState} from "react";

export default function Header(){
 const [open,setOpen]=useState(false);
 const links=[["/shop","دوچرخه‌ها"],["/shop","لوازم جانبی"],["/compare","مقایسه مدل‌ها"],["/blog","راهنمای خرید"],["/about","درباره ما"],["/admin","مدیریت"]];
 return <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
  <div className="bg-night text-white text-[11px] py-2 text-center">مشاوره انتخاب سایز و مدل مناسب پیش از خرید</div>
  <div className="container h-20 flex items-center justify-between">
   <Link href="/" className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-night text-acid grid place-items-center font-black text-xl">AI</div><div><b className="block text-xl">آقای ایران</b><span className="text-xs text-slate-500">فروشگاه تخصصی دوچرخه</span></div></Link>
   <nav className="hidden lg:flex items-center gap-7 font-black text-sm">{links.map(x=><Link key={x[0]+x[1]} href={x[0]}>{x[1]}</Link>)}</nav>
   <div className="flex gap-2"><Link href="/search" className="btnx btn-light !w-12 !p-0"><Search size={19}/></Link><Link href="/account" className="btnx btn-light !w-12 !p-0 hidden sm:flex"><User size={19}/></Link><Link href="/cart" className="btnx btn-dark !w-12 !p-0"><ShoppingBag size={19}/></Link><button className="btnx btn-light !w-12 !p-0 lg:hidden" onClick={()=>setOpen(!open)}><Menu/></button></div>
  </div>
  {open&&<div className="container pb-4 grid gap-2 lg:hidden">{links.map(x=><Link key={x[0]+x[1]} href={x[0]} className="shell p-4 font-black" onClick={()=>setOpen(false)}>{x[1]}</Link>)}</div>}
 </header>
}