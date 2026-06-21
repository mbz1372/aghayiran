import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, Wrench, CreditCard, Sparkles, LayoutDashboard } from "lucide-react";
import { categories, topProducts, formatPrice, totalRevenue } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FilterChips from "@/components/FilterChips";

export default function Home(){
 return <main>
  <section className="hero-mobile text-white">
   <div className="container py-7 md:py-16 grid md:grid-cols-2 gap-6 items-center">
    <div>
     <span className="badge bg-white/10 text-gold"><Sparkles size={14}/> Store + Admin Panel</span>
     <h1 className="text-3xl md:text-6xl font-black leading-tight mt-5">فروشگاه دوچرخه با پنل فروش، فاکتور و انبار.</h1>
     <p className="text-slate-300 leading-8 mt-4 text-sm md:text-lg">نسخه آماده Vercel برای آقای ایران؛ موبایل‌فرندلی، دیتای محصول، سفارش، فاکتور، مشتری و موجودی انبار.</p>
     <div className="grid grid-cols-2 gap-3 mt-6"><Link href="/shop" className="btn btn-gold">خرید سریع <ArrowLeft size={17}/></Link><Link href="/admin" className="btn bg-white/10 text-white border border-white/10"><LayoutDashboard size={17}/> پنل مدیریت</Link></div>
    </div>
    <div className="card bg-white/10 border-white/10 overflow-hidden"><img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1600&auto=format&fit=crop" className="h-64 md:h-[480px] w-full object-cover"/></div>
   </div>
  </section>
  <section className="container -mt-4 relative z-10">
   <div className="grid grid-cols-4 gap-2">
    {[["ارسال",Truck],["اصالت",ShieldCheck],["سرویس",Wrench],["پرداخت",CreditCard]].map(([t,Icon]:any)=><div className="card p-3 text-center" key={t}><Icon className="mx-auto text-forest" size={20}/><p className="text-[11px] font-bold mt-2">{t}</p></div>)}
   </div>
  </section>
  <section className="container py-6 md:py-12">
   <div className="flex justify-between items-end mb-4"><h2 className="text-2xl md:text-4xl font-black">دسته‌های سریع</h2><Link href="/categories" className="text-forest font-bold text-sm">همه</Link></div>
   <FilterChips/>
   <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">{categories.slice(0,10).map(c=><Link href={`/shop?cat=${c.slug}`} key={c.slug} className="card p-4 active:scale-[.99]"><div className="text-3xl">{c.icon}</div><b className="block mt-3 text-sm">{c.fa}</b><p className="text-[11px] text-slate-500 mt-1">{c.count.toLocaleString("fa-IR")} کالا</p></Link>)}</div>
  </section>
  <section className="container py-4 md:py-10">
   <div className="flex justify-between items-end mb-4"><div><h2 className="text-2xl md:text-4xl font-black">پرفروش‌ها</h2><p className="hidden md:block text-slate-500 mt-2">محصولات نمونه برای دمو فروشگاه.</p></div><Link href="/shop" className="text-forest font-bold text-sm">فروشگاه</Link></div>
   <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-5">{topProducts.map(p=><ProductCard key={p.id} p={p}/>)}</div>
  </section>
  <section className="container py-6">
   <div className="card p-6 md:p-10 bg-night text-white grid md:grid-cols-2 gap-5 items-center">
    <div><h2 className="text-2xl md:text-4xl font-black">پنل مدیریت آماده است</h2><p className="text-slate-300 leading-8 mt-3">درآمد نمونه ثبت‌شده: {formatPrice(totalRevenue)}؛ امکان مدیریت سفارش، فاکتور، انبار و مشتری.</p></div>
    <Link href="/admin" className="btn btn-gold">ورود به پنل مدیریت</Link>
   </div>
  </section>
 </main>
}
