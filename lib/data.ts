export type Product = {
 id:string; name:string; category:string; subcategory:string; brand:string; price:number; oldPrice?:number;
 image:string; gallery:string[]; badge?:string; rating:number; reviews:number; stock:number; sold:number;
 short:string; description:string; specs:string[]; suitable:string[]; color:string; size:string; weight:string; warranty:string; shipping:string;
};

export const sourceNote = "ساختار دسته‌بندی از فروشگاه‌های واقعی دوچرخه مانند Decathlon الهام گرفته شده؛ محتوا و نام‌گذاری برای آقای ایران بازنویسی شده است.";

export const categories = [
 {title:"Mountain", fa:"کوهستان", slug:"mountain", icon:"⛰️", count:18, desc:"برای مسیرهای خاکی، طبیعت و کنترل بهتر"},
 {title:"Road", fa:"جاده‌ای", slug:"road", icon:"🏁", count:10, desc:"سبک، سریع و مناسب تمرین آسفالت"},
 {title:"Gravel", fa:"گراول", slug:"gravel", icon:"🛤️", count:8, desc:"هم آسفالت، هم مسیر نیمه‌خاکی"},
 {title:"City", fa:"شهری", slug:"city", icon:"🏙️", count:15, desc:"رفت‌وآمد روزانه و راحتی بیشتر"},
 {title:"Kids", fa:"کودک", slug:"kids", icon:"🧒", count:12, desc:"ایمن، سبک و مناسب سن"},
 {title:"Helmets", fa:"کلاه ایمنی", slug:"helmets", icon:"🪖", count:22, desc:"ایمنی برای شهری، کوهستان و جاده"},
 {title:"Lights", fa:"چراغ", slug:"lights", icon:"💡", count:20, desc:"دید بهتر در شب و مسیرهای کم‌نور"},
 {title:"Locks", fa:"قفل", slug:"locks", icon:"🔒", count:16, desc:"امنیت توقف‌های شهری"},
 {title:"Pumps", fa:"پمپ و ابزار", slug:"pumps-tools", icon:"🧰", count:24, desc:"ابزار ضروری تعمیر و نگهداری"},
 {title:"Bags", fa:"کیف و قمقمه", slug:"bags-bottles", icon:"🎒", count:28, desc:"حمل وسایل، آب و تجهیزات سفر"}
];

const im = {
 mtb:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1400&auto=format&fit=crop",
 road:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1400&auto=format&fit=crop",
 city:"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1400&auto=format&fit=crop",
 gravel:"https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1400&auto=format&fit=crop",
 helmet:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1400&auto=format&fit=crop",
 light:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1400&auto=format&fit=crop",
 lock:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
 tool:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
 kids:"https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1400&auto=format&fit=crop",
 bottle:"https://images.unsplash.com/photo-1525105393123-d8c849c9f630?q=80&w=1400&auto=format&fit=crop"
};

export const products: Product[] = [
 {id:"rock-540",name:"دوچرخه کوهستان Rock 540 آقای ایران",category:"mountain",subcategory:"Hardtail MTB",brand:"Aghaye Iran Rock",price:36500000,oldPrice:39800000,image:im.mtb,gallery:[im.mtb,im.gravel,im.tool],badge:"پرفروش کوهستان",rating:4.8,reviews:186,stock:7,sold:420,short:"MTB سبک برای شروع جدی",description:"الهام‌گرفته از مدل‌های کوهستان فروشگاه‌های بین‌المللی؛ مناسب مسیرهای خاکی، شهری و آخر هفته.",specs:["فریم آلومینیوم","ترمز دیسکی","دوشاخ کمک‌دار","۲۴ دنده","چرخ ۲۷.۵"],suitable:["مسیر خاکی","طبیعت‌گردی","استفاده روزانه"],color:"مشکی / سبز",size:"M / L",weight:"۱۴.۲ کیلوگرم",warranty:"۱۸ ماه فریم",shipping:"ارسال فوری"},
 {id:"road-900",name:"دوچرخه جاده‌ای Speed 900",category:"road",subcategory:"Endurance Road",brand:"Aghaye Iran Speed",price:64500000,oldPrice:69900000,image:im.road,gallery:[im.road,im.gravel,im.helmet],badge:"حرفه‌ای",rating:4.9,reviews:74,stock:4,sold:90,short:"برای سرعت و تمرین",description:"دوچرخه جاده‌ای سبک برای مسیرهای آسفالت، تمرین منظم و رکاب‌زنی سریع.",specs:["فرم ایرودینامیک","دسته کورسی","۲۲ دنده","تایر 700C","توپی روان"],suitable:["تمرین سرعت","جاده","مسافت طولانی"],color:"مشکی / طلایی",size:"M / L / XL",weight:"۹.۸ کیلوگرم",warranty:"۱۲ ماه قطعات",shipping:"ارسال ویژه"},
 {id:"gravel-520",name:"دوچرخه گراول مسیر 520",category:"gravel",subcategory:"All-road",brand:"Aghaye Iran Gravel",price:49800000,image:im.gravel,gallery:[im.gravel,im.road,im.mtb],badge:"همه‌کاره",rating:4.7,reviews:92,stock:6,sold:138,short:"آسفالت و خاکی سبک",description:"برای کسانی که بین دوچرخه جاده‌ای و کوهستان گیر کرده‌اند؛ سریع، راحت و مناسب مسیرهای ترکیبی.",specs:["فرم راحت","تایر نیمه‌آج","دسته دراپ","ترمز دیسکی","نقاط نصب کیف"],suitable:["سفر سبک","آسفالت","مسیر نیمه‌خاکی"],color:"زیتونی",size:"M / L",weight:"۱۱.۳ کیلوگرم",warranty:"۱۲ ماه",shipping:"ارسال رایگان"},
 {id:"city-100",name:"دوچرخه شهری City 100 Comfort",category:"city",subcategory:"Urban Bike",brand:"Aghaye Iran City",price:18500000,oldPrice:20900000,image:im.city,gallery:[im.city,im.bottle,im.lock],badge:"اقتصادی",rating:4.6,reviews:154,stock:16,sold:880,short:"رفت‌وآمد راحت شهری",description:"مدل شهری با زین راحت، گلگیر و فرم مناسب برای استفاده روزانه.",specs:["زین طبی","گلگیر کامل","سبد جلو","ترمز نرم","فریم سبک"],suitable:["رفت‌وآمد","خرید شهری","دانشجو"],color:"کرم / آبی",size:"S / M",weight:"۱۳.۵ کیلوگرم",warranty:"۱۲ ماه",shipping:"ارسال رایگان"},
 {id:"kids-20",name:"دوچرخه کودک Kids 20 Safe",category:"kids",subcategory:"Kids Bike",brand:"Aghaye Iran Kids",price:11900000,oldPrice:13200000,image:im.kids,gallery:[im.kids,im.helmet,im.city],badge:"کودک",rating:4.7,reviews:63,stock:10,sold:210,short:"ایمن برای کودک",description:"دوچرخه کودک با محافظ زنجیر، ترمز نرم و رنگ‌بندی شاد.",specs:["چرخ ۲۰ اینچ","محافظ زنجیر","فریم مقاوم","ترمز نرم","زین قابل تنظیم"],suitable:["کودک","نوجوان","شروع رکاب‌زنی"],color:"قرمز / آبی",size:"20 inch",weight:"۱۰.۱ کیلوگرم",warranty:"۱۲ ماه",shipping:"ارسال فوری"},
 {id:"helmet-city",name:"کلاه ایمنی City Protect 500",category:"helmets",subcategory:"Helmet",brand:"SafeRide",price:2450000,oldPrice:2790000,image:im.helmet,gallery:[im.helmet,im.light,im.city],badge:"ضروری",rating:4.9,reviews:330,stock:42,sold:1500,short:"سبک و تهویه‌دار",description:"کلاه شهری و هیبریدی با تهویه مناسب، بند قابل تنظیم و وزن پایین.",specs:["استاندارد CE","تهویه ۱۸ کاناله","وزن کم","قفل قابل تنظیم","پد داخلی"],suitable:["شهر","جاده","کوهستان سبک"],color:"مشکی / سفید",size:"M / L",weight:"۲۸۰ گرم",warranty:"۷ روز تعویض",shipping:"ارسال امروز"},
 {id:"light-usb",name:"ست چراغ USB-C مدل Night Beam",category:"lights",subcategory:"Bike Lights",brand:"LightMax",price:1180000,image:im.light,gallery:[im.light,im.helmet,im.lock],badge:"شب‌سواری",rating:4.8,reviews:204,stock:54,sold:1320,short:"جلو و عقب شارژی",description:"ست چراغ جلو و عقب برای افزایش دید در شب و مسیرهای کم‌نور.",specs:["شارژ USB-C","سه حالت نور","ضد آب IPX4","نصب سریع","برد نور مناسب"],suitable:["شب","شهر","مسیر کم‌نور"],color:"مشکی",size:"Universal",weight:"۱۲۰ گرم",warranty:"۶ ماه",shipping:"ارسال فوری"},
 {id:"lock-chain",name:"قفل زنجیری Urban Lock Pro",category:"locks",subcategory:"Lock",brand:"LockPro",price:890000,oldPrice:1050000,image:im.lock,gallery:[im.lock,im.city,im.tool],badge:"امنیت",rating:4.6,reviews:142,stock:67,sold:760,short:"برای توقف شهری",description:"قفل زنجیری مقاوم برای توقف‌های کوتاه و روزمره در شهر.",specs:["طول ۹۰ سانت","روکش ضد خش","دو کلید یدک","فولاد مقاوم","حمل آسان"],suitable:["شهر","دانشگاه","توقف کوتاه"],color:"مشکی",size:"90cm",weight:"۹۰۰ گرم",warranty:"۳ ماه",shipping:"ارسال امروز"},
 {id:"pump-mini",name:"پمپ دستی Mini Pump 120 PSI",category:"pumps-tools",subcategory:"Pump",brand:"RoadFix",price:780000,image:im.tool,gallery:[im.tool,im.road,im.bottle],badge:"ابزار ضروری",rating:4.5,reviews:115,stock:72,sold:680,short:"کوچک و قابل حمل",description:"پمپ دستی سبک برای سفر، تمرین و پنچرگیری سریع.",specs:["تا ۱۲۰ PSI","بدنه آلومینیوم","سری دوکاره","نصب روی فریم","وزن کم"],suitable:["سفر","تمرین","نگهداری"],color:"نقره‌ای",size:"Mini",weight:"۱۶۰ گرم",warranty:"اصالت کالا",shipping:"ارسال فوری"},
 {id:"bottle-cage",name:"قمقمه و پایه Bottle Ride 750ml",category:"bags-bottles",subcategory:"Bottle",brand:"HydroRide",price:520000,image:im.bottle,gallery:[im.bottle,im.city,im.road],badge:"اقتصادی",rating:4.4,reviews:98,stock:90,sold:1050,short:"قمقمه + پایه",description:"قمقمه سبک با پایه نصب روی فریم، مناسب شهر، تمرین و سفر کوتاه.",specs:["۷۵۰ میلی‌لیتر","BPA Free","پایه سبک","نصب آسان","درب ضد نشتی"],suitable:["تمرین","شهر","سفر"],color:"شفاف / مشکی",size:"750ml",weight:"۹۰ گرم",warranty:"اصالت کالا",shipping:"ارسال امروز"}
];

export const bundles = [
 {title:"پک شروع شهری",items:["City 100","کلاه","چراغ","قفل"],price:21900000},
 {title:"پک کوهستان آخر هفته",items:["Rock 540","کلاه","پمپ","قمقمه"],price:38900000},
 {title:"پک ایمنی شب",items:["کلاه","چراغ","قفل"],price:3990000}
];

export const formatPrice = (v:number)=>new Intl.NumberFormat("fa-IR").format(v)+" تومان";
export const findProduct=(id:string)=>products.find(p=>p.id===id);
export const topProducts=products.sort((a,b)=>b.sold-a.sold).slice(0,6);
