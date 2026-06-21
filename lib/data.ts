export type Category = { title:string; slug:string; icon:string; count:number; desc:string };
export type Product = {
 id:string; name:string; category:string; brand:string; price:number; oldPrice?:number; image:string; gallery:string[];
 badge?:string; rating:number; reviews:number; stock:number; sold:number; description:string; specs:string[];
 color:string; size:string; warranty:string; shipping:string;
};

export const categories: Category[] = [
 {title:"دوچرخه کوهستان",slug:"mountain",icon:"⛰️",count:24,desc:"برای مسیر خاکی، طبیعت‌گردی و استفاده سنگین"},
 {title:"دوچرخه شهری",slug:"city",icon:"🏙️",count:18,desc:"راحت، سبک و مناسب رفت‌وآمد روزمره"},
 {title:"دوچرخه جاده‌ای",slug:"road",icon:"🏁",count:12,desc:"سرعت، تمرین و مسیر آسفالت"},
 {title:"کودک و نوجوان",slug:"kids",icon:"🧒",count:16,desc:"ایمن، خوش‌رنگ و مناسب سنین مختلف"},
 {title:"لوازم ایمنی",slug:"safety",icon:"🪖",count:34,desc:"کلاه، دستکش، چراغ و تجهیزات محافظتی"},
 {title:"قطعات و ابزار",slug:"parts",icon:"⚙️",count:64,desc:"قطعات مصرفی، قفل، پمپ و ابزار سرویس"}
];

const img = {
 mountain:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1400&auto=format&fit=crop",
 city:"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1400&auto=format&fit=crop",
 road:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1400&auto=format&fit=crop",
 helmet:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1400&auto=format&fit=crop",
 light:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
 tool:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
 kids:"https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1400&auto=format&fit=crop",
 lock:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1400&auto=format&fit=crop"
};

export const products: Product[] = [
 {id:"alborz-x9",name:"دوچرخه کوهستان آقای ایران مدل البرز X9",category:"mountain",brand:"Aghaye Iran",price:34500000,oldPrice:38900000,image:img.mountain,gallery:[img.mountain,img.road,img.city],badge:"انتخاب حرفه‌ای‌ها",rating:4.9,reviews:148,stock:8,sold:312,description:"فریم سبک، کنترل عالی و مناسب مسیرهای شهری، خاکی و سفرهای کوتاه آخر هفته.",specs:["فریم آلومینیوم 6061","ترمز دیسکی هیدرولیک","دنده ۲۷ سرعته","دوشاخ قفل‌شو","چرخ ۲۷.۵ اینچ"],color:"مشکی مات / سبز",size:"M / L",warranty:"۱۸ ماه ضمانت فریم",shipping:"ارسال فوری"},
 {id:"sepehr-comfort",name:"دوچرخه شهری سپهر Comfort Plus",category:"city",brand:"Aghaye Iran",price:18900000,oldPrice:21500000,image:img.city,gallery:[img.city,img.mountain,img.helmet],badge:"بهترین برای شهر",rating:4.7,reviews:96,stock:14,sold:520,description:"راحت، اقتصادی و مجهز به گلگیر و ترک‌بند؛ مناسب مسیر روزمره و خرید شهری.",specs:["زین طبی","ترمز V-Brake","سبد جلو","گلگیر کامل","فریم سبک"],color:"کرم / آبی نفتی",size:"S / M",warranty:"۱۲ ماه ضمانت بدنه",shipping:"ارسال رایگان"},
 {id:"badpa-r5",name:"دوچرخه جاده‌ای بادپا R5 Carbon Look",category:"road",brand:"Aghaye Iran",price:58900000,image:img.road,gallery:[img.road,img.mountain,img.city],badge:"پرسرعت",rating:4.8,reviews:64,stock:5,sold:86,description:"طراحی ایرودینامیک، وزن پایین و انتقال قدرت عالی برای تمرین جدی.",specs:["فرم مسابقه‌ای","دنده ۲۲ سرعته","تایر 700C","دسته کورسی","توپی روان"],color:"مشکی / طلایی",size:"M / L / XL",warranty:"۱۲ ماه قطعات",shipping:"ارسال ویژه"},
 {id:"aero-safe",name:"کلاه ایمنی Aero Safe Pro",category:"safety",brand:"SafeRide",price:2450000,oldPrice:2890000,image:img.helmet,gallery:[img.helmet,img.light,img.tool],badge:"تخفیف ویژه",rating:4.9,reviews:220,stock:32,sold:900,description:"کلاه سبک با تهویه بالا، بند تنظیم سریع و پوشش ضربه‌گیر حرفه‌ای.",specs:["استاندارد CE","وزن ۲۸۰ گرم","تهویه ۱۸ کاناله","سایز M/L","قفل مغناطیسی"],color:"مشکی / سفید",size:"M / L",warranty:"۷ روز ضمانت تعویض",shipping:"ارسال امروز"},
 {id:"night-pro",name:"ست چراغ جلو و عقب Night Pro USB-C",category:"safety",brand:"LightMax",price:1180000,image:img.light,gallery:[img.light,img.helmet,img.lock],badge:"ضروری",rating:4.8,reviews:174,stock:48,sold:1200,description:"نوردهی قوی برای شب، شارژ سریع و نصب بدون ابزار روی فرمان و زین.",specs:["USB-C","۳ حالت نوردهی","ضد آب IPX4","نصب سریع","شارژدهی ۶ ساعت"],color:"مشکی",size:"Universal",warranty:"۶ ماه",shipping:"ارسال فوری"},
 {id:"lock-pro",name:"قفل زنجیری ضد سرقت LockPro Steel",category:"parts",brand:"LockPro",price:890000,image:img.lock,gallery:[img.lock,img.tool,img.city],badge:"پرفروش",rating:4.6,reviews:130,stock:60,sold:740,description:"قفل زنجیری فولادی با روکش مقاوم برای توقف‌های شهری.",specs:["فولاد سخت‌کاری‌شده","طول ۹۰ سانتی‌متر","روکش ضد خش","۲ کلید یدک","مناسب موتور و دوچرخه"],color:"مشکی",size:"90cm",warranty:"۳ ماه",shipping:"ارسال فوری"},
 {id:"mini-rider",name:"دوچرخه کودک Mini Rider 20",category:"kids",brand:"Aghaye Iran Kids",price:11200000,oldPrice:12800000,image:img.kids,gallery:[img.kids,img.city,img.helmet],badge:"کودک",rating:4.7,reviews:58,stock:11,sold:180,description:"ایمن، سبک و خوش‌رنگ برای کودکان و نوجوانان تازه‌کار.",specs:["چرخ ۲۰ اینچ","محافظ زنجیر","ترمز نرم","فریم مقاوم","رنگ کوره‌ای"],color:"قرمز / آبی",size:"20 inch",warranty:"۱۲ ماه",shipping:"ارسال رایگان"},
 {id:"tool-kit",name:"کیت ابزار سرویس دوچرخه RoadFix 16in1",category:"parts",brand:"RoadFix",price:1370000,image:img.tool,gallery:[img.tool,img.lock,img.light],badge:"کاربردی",rating:4.5,reviews:88,stock:27,sold:430,description:"ابزار چندکاره برای تنظیمات سریع، سفر و سرویس‌های سبک.",specs:["۱۶ ابزار کاربردی","آچار آلن","زنجیر بازکن","کیف حمل","وزن کم"],color:"نقره‌ای",size:"Pocket",warranty:"اصالت کالا",shipping:"ارسال امروز"}
];

export const posts = [
 {title:"راهنمای انتخاب سایز دوچرخه بر اساس قد",tag:"راهنمای خرید",read:"۶ دقیقه"},
 {title:"برای رکاب‌زنی شبانه چه لوازمی ضروری است؟",tag:"ایمنی",read:"۴ دقیقه"},
 {title:"تفاوت دوچرخه کوهستان و شهری در استفاده روزمره",tag:"مقایسه",read:"۷ دقیقه"}
];

export const formatPrice = (v:number) => new Intl.NumberFormat("fa-IR").format(v)+" تومان";
export const findProduct = (id:string) => products.find(p=>p.id===id);
export const bestSellers = products.sort((a,b)=>b.sold-a.sold).slice(0,4);
