import Link from "next/link";
import {ArrowDown,ArrowLeft,Award,ChevronLeft,Compass,Headphones,Play,ShieldCheck,Sparkles,Wrench} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BikeFinder from "@/components/BikeFinder";
import RideStudio from "@/components/RideStudio";
import RidePulse from "@/components/RidePulse";
import {products} from "@/lib/data";

export default function Home(){return <main>
 <section className="hero-world hero-v2">
  <div className="hero-media"><img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=88&w=2400&auto=format&fit=crop" alt="دوچرخه‌سواری حرفه‌ای در مسیر کوهستان"/></div>
  <div className="hero-noise"/><div className="hero-line"/>
  <div className="container hero-content">
   <div className="hero-kicker"><span className="live-dot"/> نسل تازه فروشگاه تخصصی دوچرخه</div>
   <h1 className="display">مسیرت را<br/><em>خودت انتخاب کن.</em></h1>
   <p className="lead">فروش دوچرخه فقط نقطه شروع است. انتخاب هوشمند، تنظیم سایز، مقایسه تخصصی، گاراژ شخصی و سرویس دوره‌ای؛ همه در یک تجربه.</p>
   <div className="hero-actions"><Link href="/shop" className="btnx btn-acid">کشف کالکشن <ArrowLeft/></Link><a href="#studio" className="btnx hero-glass"><Play size={18}/> ورود به استودیو</a></div>
   <div className="hero-proof"><span><ShieldCheck/> ضمانت اصالت</span><span><Wrench/> مونتاژ تخصصی</span><span><Headphones/> مشاوره واقعی</span></div>
  </div>
  <a href="#worlds" className="scroll-cue"><span>SCROLL TO RIDE</span><ArrowDown/></a>
 </section>
 <div className="marquee marquee-v2"><span>RIDE MORE · GO FURTHER · OWN THE ROAD · آقای ایران · BUILT FOR YOUR NEXT STORY · </span></div>
 <section id="worlds" className="section worlds-section"><div className="container">
  <div className="section-head"><div><span className="eyebrow text-forest">CHOOSE YOUR WORLD</span><h2>دوچرخه‌ای برای هر نسخه از تو.</h2><p className="muted">از ترافیک صبحگاهی تا پیچ آخر یک مسیر جنگلی؛ انتخاب از سبک زندگی شروع می‌شود.</p></div><Link href="/shop" className="btnx btn-light">مشاهده همه <ChevronLeft/></Link></div>
  <div className="world-grid">
   <Link href="/shop" className="world-card world-main"><img src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=84&w=1800&auto=format&fit=crop" alt="دوچرخه کوهستان"/><div className="world-index">01</div><div className="world-copy"><span>TRAIL / ENDURO</span><h3>کوهستان</h3><p>کنترل بیشتر، ترمز دیرتر، مسیر دورتر.</p><b>کشف مسیر <ArrowLeft/></b></div></Link>
   <Link href="/shop" className="world-card"><img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=84&w=1500&auto=format&fit=crop" alt="دوچرخه جاده‌ای"/><div className="world-index">02</div><div className="world-copy"><span>ROAD / SPEED</span><h3>جاده‌ای</h3><p>برای ثانیه‌هایی که اهمیت دارند.</p></div></Link>
   <Link href="/shop" className="world-card"><img src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=84&w=1500&auto=format&fit=crop" alt="دوچرخه شهری"/><div className="world-index">03</div><div className="world-copy"><span>URBAN / DAILY</span><h3>شهری</h3><p>شهر را از زاویه تازه ببین.</p></div></Link>
  </div>
 </div></section>
 <section className="section pulse-section"><div className="container pulse-layout"><div><span className="eyebrow text-acid"><Compass size={16}/> LIVE RIDE CULTURE</span><h2>فروشگاه بعد از خرید تمام نمی‌شود.</h2><p>هر دوچرخه وارد گاراژ شخصی تو می‌شود؛ مسیرها، سرویس‌ها و پیشرفت رکاب‌زنی را یک‌جا می‌بینی.</p><Link href="/garage" className="btnx btn-acid mt-6">ورود به گاراژ <ArrowLeft/></Link></div><RidePulse/></div></section>
 <section id="finder" className="section"><div className="container"><div className="finder finder-v2"><div className="finder-copy"><span className="eyebrow"><Sparkles size={16}/> SMART BIKE FINDER</span><h2>سه سؤال تا دوچرخه درست.</h2><p>بر اساس مسیر، تجربه و بودجه، مدل مناسب را بدون اصطلاحات پیچیده پیدا کن.</p><div className="finder-badges"><span>قد و سایز</span><span>نوع مسیر</span><span>بودجه واقعی</span></div></div><BikeFinder/></div></div></section>
 <section id="studio" className="section studio-section"><div className="container"><div className="section-head"><div><span className="eyebrow text-forest">INTERACTIVE BUILD</span><h2>استودیوی شخصی‌سازی آقای ایران.</h2><p className="muted">یک تجربه تعاملی برای دیدن کانفیگ قبل از خرید.</p></div></div><RideStudio/></div></section>
 <section className="section products-feature"><div className="container"><div className="section-head"><div><span className="eyebrow text-forest">EDITOR'S SELECTION</span><h2>ماشین‌های منتخب این هفته.</h2></div><Link href="/compare" className="btnx btn-dark">مقایسه تخصصی</Link></div><div className="product-grid">{products.slice(0,8).map(p=><ProductCard key={p.id} p={p}/>)}</div></div></section>
 <section className="section"><div className="container campaign-grid">
  <article className="campaign campaign-dark"><div><span className="eyebrow text-acid"><Award size={16}/> PREMIUM SERVICE</span><h3>تحویل آماده رکاب، نه داخل کارتن.</h3><p>تنظیم ترمز و دنده، کنترل گشتاور، فیت اولیه و راهنمای استفاده؛ پیش از تحویل.</p><Link href="/contact" className="btnx btn-acid">رزرو مشاوره</Link></div><img src="https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=82&w=1500&auto=format&fit=crop" alt="سرویس تخصصی دوچرخه"/></article>
  <article className="campaign campaign-story"><img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=82&w=1500&auto=format&fit=crop" alt="داستان رکاب‌زنی"/><div><span className="eyebrow">FIELD NOTES / 07</span><h3>یک آخر هفته، یک مسیر، یک تصمیم تازه.</h3><Link href="/blog">خواندن داستان <ArrowLeft/></Link></div></article>
 </div></section>
</main>}