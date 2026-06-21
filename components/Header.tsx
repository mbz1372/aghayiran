"use client";
import Link from "next/link";
import { Search, ShoppingCart, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
export default function Header(){
 const [open,setOpen]=useState(false);
 const nav=[["/shop","فروشگاه"],["/categories","دسته‌بندی"],["/blog","راهنما"],["/contact","تماس"],["/admin","ادمین"]];
 return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200">
  <div className="container py-2 text-[11px] text-slate-500 flex justify-between"><span>ارسال سریع تهران و شهرستان</span><span className="ltr">021-9100-0000</span></div>
  <div className="container h-16 flex items-center justify-between gap-3">
   <Link href="/" className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-2xl bg-night text-gold grid place-items-center font-black text-xl">آ</div>
    <div><b className="block leading-5">آقای ایران</b><small className="text-slate-500">Bike Store</small></div>
   </Link>
   <nav className="hidden md:flex gap-5 text-sm font-bold">{nav.map(n=><Link className="hover:text-forest" key={n[0]} href={n[0]}>{n[1]}</Link>)}</nav>
   <div className="flex items-center gap-2">
    <Link href="/search" className="md:hidden btn btn-ghost p-3"><Search size={18}/></Link>
    <Link href="/account" className="hidden sm:flex btn btn-ghost p-3"><UserRound size={18}/></Link>
    <Link href="/cart" className="btn btn-primary p-3 relative"><ShoppingCart size={18}/><span className="absolute -top-2 -left-2 bg-gold text-night rounded-full w-5 h-5 text-[10px] grid place-items-center">۲</span></Link>
    <button onClick={()=>setOpen(!open)} className="md:hidden btn btn-ghost p-3">{open?<X/>:<Menu/>}</button>
   </div>
  </div>
  <div className="hidden md:block container pb-3">
   <div className="bg-cloud rounded-2xl p-3 flex items-center gap-2"><Search size={18}/><input className="bg-transparent outline-none w-full text-sm" placeholder="جستجوی دوچرخه، کلاه، چراغ، قفل..."/></div>
  </div>
  {open && <div className="md:hidden container pb-4 grid gap-2">{nav.map(n=><Link key={n[0]} href={n[0]} onClick={()=>setOpen(false)} className="card p-4 font-bold">{n[1]}</Link>)}</div>}
 </header>
}
