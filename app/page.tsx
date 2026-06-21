import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, Wrench, CreditCard } from "lucide-react";
import { categories, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home(){
 return <main>
  <section className="hero-grid">
   <div className="container py-16 grid lg:grid-cols-2 gap-10 items-center">
    <div>
     <span className="badge bg-brand-soft text-brand">فروشگاه تخصصی دوچرخه و لوازم جانبی</span>
     <h1 className="text-4xl md:text-6xl font-black leading-tight mt-6">رکاب بزن، بهتر زندگی کن؛ با آقای ایران</h1>
     <p className="text-slate-600 text-lg leading-9 mt-6">خرید دوچرخه شهری، کوهستان، جاده‌ای و لوازم جانبی با مشاوره تخصصی، ضمانت اصالت، ارسال سریع و امکان سرویس دوره‌ای.</p>
     <div className="flex flex-wrap gap-3 mt-8"><Link className="btn btn-primary" href="/shop">مشاهده محصولات <ArrowLeft size={18}/></Link><Link className="btn btn-ghost" href="/categories">انتخاب بر اساس نیاز</Link></div>
    </div>
    <div className="card overflow-hidden shadow-glow"><img className="w-full h-[460px] object-cover" src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1400&auto=format&fit=crop" alt="bike"/></div>
   </div>
  </section>

  <section className="container py-10 grid md:grid-cols-4 gap-4">
   {[["ارسال سریع",Truck],["گارانتی اصالت",ShieldCheck],["سرویس تخصصی",Wrench],["پرداخت امن",CreditCard]].map(([t,Icon]:any)=><div key={t} className="card p-5 flex items-center gap-3"><Icon className="text-brand"/><b>{t}</b></div>)}
  </section>

  <section className="container py-10">
   <div className="flex items-end justify-between mb-6"><div><h2 className="text-3xl font-black">دسته‌بندی‌ها</h2><p className="text-slate-500 mt-2">سریع‌تر چیزی که نیاز داری را پیدا کن.</p></div><Link href="/categories" className="text-brand font-bold">همه دسته‌ها</Link></div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">{categories.map(c=><Link href={`/shop?cat=${c.slug}`} key={c.slug} className="card p-5 hover:-translate-y-1 transition"><div className="text-4xl">{c.icon}</div><b className="block mt-4">{c.title}</b><p className="text-xs text-slate-500 mt-1">{c.count} کالا</p></Link>)}</div>
  </section>

  <section className="container py-10">
   <div className="flex items-end justify-between mb-6"><div><h2 className="text-3xl font-black">محصولات منتخب</h2><p className="text-slate-500 mt-2">برای شروع حرفه‌ای یا استفاده روزمره.</p></div><Link href="/shop" className="text-brand font-bold">مشاهده فروشگاه</Link></div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{products.slice(0,6).map(p=><ProductCard key={p.id} p={p}/>)}</div>
  </section>

  <section className="container py-10"><div className="card p-8 md:p-12 bg-brand text-white grid md:grid-cols-2 gap-8 items-center"><div><h2 className="text-3xl font-black">نمی‌دونی چه سایزی مناسبه؟</h2><p className="text-green-100 mt-4 leading-8">با راهنمای سایز و مشاوره رایگان، دوچرخه مناسب قد، مسیر و بودجه‌ات را انتخاب کن.</p></div><Link href="/contact" className="btn bg-white text-brand">دریافت مشاوره</Link></div></section>
 </main>
}
