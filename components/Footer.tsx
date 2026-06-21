import Link from "next/link";
import { Instagram, Send, ShieldCheck } from "lucide-react";
export default function Footer(){
 return <footer className="bg-night text-white mt-24">
  <div className="container py-14 grid lg:grid-cols-5 gap-8">
   <div className="lg:col-span-2">
    <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-2xl bg-gold text-night grid place-items-center text-2xl font-black">آ</div><h3 className="text-2xl font-black">آقای ایران</h3></div>
    <p className="text-slate-300 mt-5 leading-8">فروشگاه تخصصی دوچرخه و لوازم جانبی با تجربه خرید سریع، مشاوره تخصصی، گارانتی اصالت و خدمات پس از فروش.</p>
    <div className="flex gap-2 mt-5"><span className="badge bg-white/10"><ShieldCheck size={15}/> نماد اعتماد نمایشی</span></div>
   </div>
   <div><b>فروشگاه</b><div className="grid gap-3 text-slate-300 mt-5"><Link href="/shop">محصولات</Link><Link href="/categories">دسته‌بندی</Link><Link href="/compare">مقایسه</Link><Link href="/cart">سبد خرید</Link></div></div>
   <div><b>پشتیبانی</b><div className="grid gap-3 text-slate-300 mt-5"><Link href="/warranty">گارانتی</Link><Link href="/contact">تماس</Link><Link href="/blog">راهنمای خرید</Link><Link href="/account">حساب کاربری</Link></div></div>
   <div><b>خبرنامه</b><p className="text-slate-300 mt-5 leading-8">کدهای تخفیف و مدل‌های جدید را زودتر بگیر.</p><div className="flex gap-2 mt-4"><input className="min-w-0 flex-1 rounded-2xl p-3 text-night" placeholder="موبایل"/><button className="btn btn-gold p-3"><Send size={18}/></button></div><div className="flex gap-3 mt-5 text-gold"><Instagram/><Send/></div></div>
  </div>
  <div className="border-t border-white/10 py-5 text-center text-slate-400 text-sm">© آقای ایران - نسخه فروشگاهی آماده Vercel</div>
 </footer>
}
