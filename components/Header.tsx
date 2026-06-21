"use client";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, UserRound, Heart, Phone } from "lucide-react";
import { categories } from "@/lib/data";
import { useState } from "react";

export default function Header(){
 const [open,setOpen]=useState(false);
 const nav=[["/shop","فروشگاه"],["/categories","دسته‌بندی"],["/compare","مقایسه"],["/blog","مجله"],["/warranty","گارانتی"],["/contact","تماس"]];
 return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/88 backdrop-blur-2xl">
  <div className="bg-night text-white text-xs">
   <div className="container py-2 flex justify-between gap-3">
    <span>ارسال رایگان سفارش‌های بالای ۲۰ میلیون تومان</span>
    <span className="hidden md:flex items-center gap-2 ltr"><Phone size={14}/> 021-9100-0000</span>
   </div>
  </div>
  <div className="container h-20 flex items-center justify-between gap-4">
   <Link href="/" className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-forest to-night text-gold grid place-items-center text-2xl font-black shadow-soft">آ</div>
    <div><b className="text-xl">آقای ایران</b><p className="text-xs text-slate-500">Bike & Gear Store</p></div>
   </Link>
   <nav className="hidden xl:flex items-center gap-6 text-sm font-black">
    {nav.map(n=><Link key={n[0]} href={n[0]} className="hover:text-forest">{n[1]}</Link>)}
   </nav>
   <div className="hidden lg:flex flex-1 max-w-md bg-slate-100 rounded-2xl px-4 py-3 items-center gap-2 border border-slate-200">
    <Search size={18}/><input className="bg-transparent outline-none w-full text-sm" placeholder="جستجوی دوچرخه، کلاه، چراغ، قفل..."/>
   </div>
   <div className="flex items-center gap-2">
    <Link href="/account" className="btn btn-ghost p-3"><UserRound size={19}/></Link>
    <button className="hidden md:flex btn btn-ghost p-3"><Heart size={19}/></button>
    <Link href="/cart" className="btn btn-primary p-3 relative"><ShoppingCart size={19}/><span className="absolute -top-2 -left-2 bg-gold text-night rounded-full w-6 h-6 text-xs grid place-items-center">۲</span></Link>
    <button onClick={()=>setOpen(!open)} className="xl:hidden btn btn-ghost p-3">{open?<X/>:<Menu/>}</button>
   </div>
  </div>
  <div className="hidden xl:block border-t border-slate-100">
   <div className="container py-3 flex gap-3 overflow-x-auto scrollbar-hide">
    {categories.map(c=><Link key={c.slug} href={`/shop?cat=${c.slug}`} className="badge bg-slate-100 hover:bg-mint">{c.icon} {c.title}</Link>)}
   </div>
  </div>
  {open && <div className="xl:hidden container pb-5 grid gap-2">{nav.map(n=><Link onClick={()=>setOpen(false)} className="card p-4 font-bold" key={n[0]} href={n[0]}>{n[1]}</Link>)}</div>}
 </header>
}
