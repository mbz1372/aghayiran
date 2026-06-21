"use client";
import Link from "next/link";
import { Search, ShoppingCart, Menu, UserRound } from "lucide-react";
import { useState } from "react";
export default function Header(){
 const [open,setOpen]=useState(false);
 const nav=[["/shop","فروشگاه"],["/categories","دسته‌بندی"],["/blog","راهنمای خرید"],["/about","درباره ما"],["/contact","تماس"]];
 return <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200">
  <div className="container h-20 flex items-center justify-between gap-4">
   <Link href="/" className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-2xl bg-brand text-white grid place-items-center text-2xl font-black">آ</div>
    <div><b className="text-xl">آقای ایران</b><p className="text-xs text-slate-500">فروشگاه تخصصی دوچرخه</p></div>
   </Link>
   <nav className="hidden lg:flex items-center gap-6 text-sm font-bold">{nav.map(n=><Link key={n[0]} href={n[0]} className="hover:text-brand">{n[1]}</Link>)}</nav>
   <div className="hidden md:flex flex-1 max-w-sm bg-slate-100 rounded-2xl px-4 py-3 items-center gap-2"><Search size={18}/><input className="bg-transparent outline-none w-full text-sm" placeholder="جستجوی دوچرخه، کلاه، چراغ..."/></div>
   <div className="flex items-center gap-2">
    <Link href="/account" className="btn btn-ghost p-3"><UserRound size={19}/></Link>
    <Link href="/cart" className="btn btn-primary p-3 relative"><ShoppingCart size={19}/><span className="absolute -top-2 -left-2 bg-brand-gold text-ink rounded-full w-6 h-6 text-xs grid place-items-center">۲</span></Link>
    <button onClick={()=>setOpen(!open)} className="lg:hidden btn btn-ghost p-3"><Menu/></button>
   </div>
  </div>
  {open && <div className="lg:hidden container pb-4 grid gap-2">{nav.map(n=><Link className="card p-4" key={n[0]} href={n[0]}>{n[1]}</Link>)}</div>}
 </header>
}
