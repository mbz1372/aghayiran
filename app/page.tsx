import Link from "next/link";
import {ArrowDown,ArrowLeft,Award,ChevronLeft,Headphones,ShieldCheck,Sparkles,SearchCheck} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BikeFinder from "@/components/BikeFinder";
import {products} from "@/lib/data";

export default function Home(){return <main>
 <section className="hero-world hero-v2">
  <div className="hero-media"><img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=88&w=2400&auto=format&fit=crop" alt="دوچرخه‌سواری در مسیر طبیعت"/></div>
  <div className="hero-noise"/><div className="hero-line"/>
  <div className="container hero-content">
   <div className="hero-kicker"><span className="live-dot"/> فروشگاه چندبرندی دوچرخه و تجهیزات</div>
   <h1 className="display">مدل واقعی.<br/><em>انتخاب درست.</em></h1>
   <p className="lead">دوچرخه‌های واقعی Giant، Scott، Gitane و Raleigh را بر اساس نوع مسیر، سایز چرخ، سیستم دنده و ترمز مقایسه کن؛ بدون مدل یا مشخصات ساختگی.</p>
   <div className="hero-actions"><Link href="/shop" className="btnx btn-acid">مشاهده محصولات <ArrowLeft/></Link><a href="#finder" className="btnx hero-glass"><SearchCheck size={18}/> راهنمای انتخاب</a></div>
   <div className="hero-proof"><span><ShieldCheck/> اطلاعات فنی مستند</span><span><Headphones/> مشاوره انتخاب مدل</span><span><Sparkles/> برندهای فعال بازار ایران</span></div>
  </div>
  <a href="#worlds" className="scroll-cue"><span>مشاهده دسته‌بندی‌ها</span><ArrowDown/></a>
 </section>
 <div className="marquee marquee-v2"><span>GIANT · SCOTT · GITANE · RALEIGH · SHIMANO · انتخاب واقعی برای مسیر واقعی · </span></div>

 <section id="worlds" className="section worlds-section"><div className="container">
  <div className="section-head"><div><span className="eyebrow text-forest">دسته‌بندی بر اساس کاربرد</span><h2>اول مسیر را انتخاب کن.</h2><p className="muted">هر دوچرخه برای کاربرد مشخصی طراحی شده؛ شهری، کوهستان یا استفاده ترکیبی.</p></div><Link href="/shop" className="btnx btn-light">همه محصولات <ChevronLeft/></Link></div>
  <div className="world-grid">
   <Link href="/shop" className="world-card world-main"><img src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=84&w=1800&auto=format&fit=crop" alt="دوچرخه کوهستان"/><div className="world-index">01</div><div className="world-copy"><span>MTB / HARDTAIL</span><h3>کوهستان</h3><p>چرخ 27.5 و 29، کمک‌فنر جلو و ترمز دیسکی.</p><b>مشاهده مدل‌ها <ArrowLeft/></b></div></Link>
   <Link href="/shop" className="world-card"><img src="https://cdn.shoplightspeed.com/shops/666477/files/52047286/800x800x3/giant-giant-escape-3.jpg" alt="دوچرخه شهری Giant Escape 3"/><div className="world-index">02</div><div className="world-copy"><span>URBAN / HYBRID</span><h3>شهری و هیبرید</h3><p>برای رفت‌وآمد، ورزش و آسفالت.</p></div></Link>
   <Link href="/shop" className="world-card"><img src="https://www.bikecenter.ir/images/slide1.jpg" alt="فروشگاه تخصصی دوچرخه"/><div className="world-index">03</div><div className="world-copy"><span>GEAR / SAFETY</span><h3>تجهیزات</h3><p>کلاه، چراغ، قفل و قطعات مصرفی.</p></div></Link>
  </div>
 </div></section>

 <section id="finder" className="section"><div className="container"><div className="finder finder-v2"><div className="finder-copy"><span className="eyebrow"><Sparkles size={16}/> راهنمای انتخاب دوچرخه</span><h2>سه سؤال تا انتخاب مناسب‌تر.</h2><p>بر اساس مسیر استفاده، تجربه و بودجه، بین مدل‌های واقعی موجود در کاتالوگ مقایسه کن.</p><div className="finder-badges"><span>نوع مسیر</span><span>سایز چرخ</span><span>سطح تجهیزات</span></div></div><BikeFinder/></div></div></section>

 <section className="section products-feature"><div className="container"><div className="section-head"><div><span className="eyebrow text-forest">کاتالوگ واقعی</span><h2>مدل‌های منتخب بازار.</h2><p className="muted">مشخصات از صفحات واقعی محصول استخراج شده‌اند؛ قیمت و موجودی به‌دلیل نوسان بازار به‌صورت استعلامی است.</p></div><Link href="/compare" className="btnx btn-dark">مقایسه فنی</Link></div><div className="product-grid">{products.map(p=><ProductCard key={p.id} p={p}/>)}</div></div></section>

 <section className="section"><div className="container campaign-grid">
  <article className="campaign campaign-dark"><div><span className="eyebrow text-acid"><Award size={16}/> مشاوره پیش از خرید</span><h3>سایز اشتباه، انتخاب اشتباه.</h3><p>قد، نوع استفاده و بودجه‌ات را بگو تا بین مدل‌های واقعی، گزینه مناسب‌تری پیشنهاد شود.</p><Link href="/contact" className="btnx btn-acid">درخواست مشاوره</Link></div><img src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=82&w=1500&auto=format&fit=crop" alt="انتخاب دوچرخه مناسب"/></article>
  <article className="campaign campaign-story"><img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=82&w=1500&auto=format&fit=crop" alt="راهنمای دوچرخه‌سواری"/><div><span className="eyebrow">راهنمای خرید</span><h3>تفاوت چرخ 27.5 و 29 چیست؟</h3><Link href="/blog">خواندن راهنما <ArrowLeft/></Link></div></article>
 </div></section>
</main>}