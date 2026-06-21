import Link from "next/link";
import { ArrowLeft, Award, CreditCard, ShieldCheck, Truck, Wrench, Sparkles, PlayCircle } from "lucide-react";
import { bestSellers, categories, posts, products, formatPrice } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home(){
 return <main>
  <section className="hero-bg text-white overflow-hidden">
   <div className="container py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
    <div>
     <span className="badge bg-white/10 text-gold border border-white/10"><Sparkles size={14}/> Aghaye Iran Bike Store</span>
     <h1 className="text-4xl md:text-7xl font-black leading-tight mt-6">فروشگاه دوچرخه‌ای که حس برند حرفه‌ای دارد.</h1>
     <p className="text-slate-300 text-lg leading-9 mt-6">خرید دوچرخه کوهستان، شهری، جاده‌ای و لوازم جانبی با طراحی فروشگاهی مدرن، آماده دیپلوی روی Vercel و قابل توسعه به دیتابیس و پرداخت آنلاین.</p>
     <div className="flex flex-wrap gap-3 mt-8"><Link className="btn btn-gold" href="/shop">شروع خرید <ArrowLeft size={18}/></Link><Link className="btn bg-white/10 text-white border border-white/15" href="/compare"><PlayCircle size={18}/> مقایسه مدل‌ها</Link></div>
     <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl">
      {[["۸۰+","محصول"],["۴.۸","امتیاز"],["۲۴h","ارسال"]].map(x=><div key={x[1]} className="glass rounded-3xl p-4 text-center"><b className="text-3xl text-gold">{x[0]}</b><p className="text-xs text-slate-200 mt-1">{x[1]}</p></div>)}
     </div>
    </div>
    <div className="relative">
     <div className="absolute -inset-8 bg-gold/20 rounded-full blur-3xl"/>
     <div className="card bg-white/8 border-white/10 overflow-hidden shadow-luxury relative">
      <img className="w-full h-[520px] object-cover" src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1600&auto=format&fit=crop" alt="bike"/>
      <div className="absolute bottom-5 inset-x-5 glass rounded-3xl p-5 text-night">
       <div className="flex justify-between gap-4"><div><b>البرز X9</b><p className="text-sm text-slate-600 mt-1">دوچرخه کوهستان حرفه‌ای</p></div><b className="text-forest">{formatPrice(34500000)}</b></div>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section className="container -mt-8 relative z-10 grid md:grid-cols-4 gap-4">
   {[["ارسال سریع",Truck],["گارانتی اصالت",ShieldCheck],["سرویس تخصصی",Wrench],["پرداخت امن",CreditCard]].map(([t,Icon]:any)=><div key={t} className="card p-5 flex items-center gap-3"><div className="w-12 h-12 rounded-2xl bg-mint text-forest grid place-items-center"><Icon/></div><b>{t}</b></div>)}
  </section>

  <section className="container py-16">
   <SectionTitle eyebrow="Shop by category" title="دسته‌بندی‌های اصلی" desc="از دوچرخه حرفه‌ای تا تجهیزات ایمنی و ابزار سرویس."/>
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{categories.map(c=><Link href={`/shop?cat=${c.slug}`} key={c.slug} className="card p-7 hover:-translate-y-1 transition group"><div className="flex justify-between items-start"><span className="text-5xl">{c.icon}</span><span className="badge bg-slate-100">{c.count.toLocaleString("fa-IR")} کالا</span></div><h3 className="text-2xl font-black mt-6 group-hover:text-forest">{c.title}</h3><p className="text-slate-500 leading-8 mt-2">{c.desc}</p></Link>)}</div>
  </section>

  <section className="container py-8">
   <SectionTitle eyebrow="Best Sellers" title="پرفروش‌ترین‌ها" desc="محصولاتی که برای شروع، بهترین انتخاب هستند."/>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{bestSellers.map(p=><ProductCard key={p.id} p={p}/>)}</div>
  </section>

  <section className="container py-16">
   <div className="card overflow-hidden grid lg:grid-cols-2 bg-night text-white">
    <div className="p-8 md:p-12"><span className="badge bg-gold text-night"><Award size={14}/> پیشنهاد ویژه</span><h2 className="text-4xl font-black leading-tight mt-5">پک شروع رکاب‌زنی شهری</h2><p className="text-slate-300 leading-9 mt-5">دوچرخه شهری + کلاه ایمنی + چراغ USB + قفل ضد سرقت با تخفیف پکیجی.</p><div className="flex gap-3 mt-8"><Link href="/shop" className="btn btn-gold">مشاهده پک‌ها</Link><Link href="/contact" className="btn bg-white/10 text-white">مشاوره رایگان</Link></div></div>
    <img src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=80&w=1400&auto=format&fit=crop" className="h-full min-h-[360px] w-full object-cover"/>
   </div>
  </section>

  <section className="container py-8">
   <SectionTitle eyebrow="New Arrivals" title="همه محصولات منتخب"/>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(p=><ProductCard key={p.id} p={p}/>)}</div>
  </section>

  <section className="container py-16">
   <SectionTitle eyebrow="Magazine" title="راهنمای خرید آقای ایران"/>
   <div className="grid md:grid-cols-3 gap-6">{posts.map((p,i)=><article key={p.title} className="card p-6"><span className="badge bg-mint text-forest">{p.tag}</span><h3 className="text-xl font-black leading-9 mt-5">{p.title}</h3><p className="text-slate-500 mt-3">مطالعه: {p.read}</p><Link href="/blog" className="text-forest font-black inline-flex mt-5">خواندن مقاله</Link></article>)}</div>
  </section>
 </main>
}
