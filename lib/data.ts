export type Product = {
  id: string; name: string; category: string; brand: string; price: number; oldPrice?: number;
  image: string; badge?: string; rating: number; stock: number; description: string; specs: string[];
};

export const categories = [
  { title: "دوچرخه شهری", slug: "city", icon: "🚲", count: 18 },
  { title: "کوهستان", slug: "mountain", icon: "⛰️", count: 24 },
  { title: "جاده‌ای", slug: "road", icon: "🏁", count: 12 },
  { title: "کودک و نوجوان", slug: "kids", icon: "🧒", count: 16 },
  { title: "لوازم جانبی", slug: "accessories", icon: "🧰", count: 80 },
  { title: "قطعات و سرویس", slug: "parts", icon: "⚙️", count: 64 },
];

export const products: Product[] = [
  { id:"p1", name:"دوچرخه کوهستان آقای ایران مدل البرز X7", category:"mountain", brand:"Aghaye Iran", price: 28500000, oldPrice: 32000000, image:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1200&auto=format&fit=crop", badge:"پرفروش", rating:4.8, stock:7, description:"دوچرخه‌ای مقاوم برای مسیرهای شهری و خاکی، مناسب استفاده روزانه و سفرهای آخر هفته.", specs:["فریم آلومینیوم 6061","ترمز دیسکی مکانیکی","دنده ۲۱ سرعته","سایز چرخ ۲۷.۵"] },
  { id:"p2", name:"دوچرخه شهری مدل سپهر Comfort", category:"city", brand:"Aghaye Iran", price: 16900000, image:"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1200&auto=format&fit=crop", badge:"اقتصادی", rating:4.6, stock:12, description:"انتخابی سبک و راحت برای رفت‌وآمد روزانه در شهر.", specs:["زین طبی","گلگیر کامل","ترمز V-Brake","سبد جلو"] },
  { id:"p3", name:"کلاه ایمنی حرفه‌ای Aero Safe", category:"accessories", brand:"SafeRide", price: 1850000, oldPrice: 2200000, image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop", badge:"تخفیف", rating:4.9, stock:30, description:"کلاه سبک با تهویه بالا و بند قابل تنظیم.", specs:["استاندارد CE","وزن ۲۸۰ گرم","مناسب شهری و جاده","سایزبندی M/L"] },
  { id:"p4", name:"چراغ جلو و عقب USB مدل Night Pro", category:"accessories", brand:"LightMax", price: 980000, image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", badge:"جدید", rating:4.7, stock:44, description:"ست چراغ شارژی مناسب رکاب‌زنی شبانه.", specs:["شارژ USB-C","سه حالت نوردهی","ضد آب سبک","نصب سریع"] },
  { id:"p5", name:"دوچرخه جاده‌ای مدل بادپا R3", category:"road", brand:"Aghaye Iran", price: 46500000, image:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop", badge:"حرفه‌ای", rating:4.8, stock:4, description:"برای سرعت، تمرین و مسیرهای آسفالت طراحی شده است.", specs:["فریم سبک","کرپی مسابقه‌ای","دنده ۱۸ سرعته","تایر 700C"] },
  { id:"p6", name:"قفل زنجیری ضد سرقت فولادی", category:"accessories", brand:"LockPro", price: 740000, image:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop", rating:4.5, stock:60, description:"قفل مقاوم برای توقف‌های شهری.", specs:["طول ۹۰ سانتی‌متر","روکش پارچه‌ای","کلید یدک","فولاد سخت‌کاری‌شده"] }
];

export const formatPrice = (value:number) => new Intl.NumberFormat("fa-IR").format(value) + " تومان";
export const findProduct = (id:string) => products.find(p => p.id === id);
