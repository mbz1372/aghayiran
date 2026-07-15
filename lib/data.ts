export type Product={id:string;sku:string;name:string;category:string;subcategory:string;brand:string;price:number;cost:number;oldPrice?:number;image:string;gallery:string[];badge?:string;rating:number;reviews:number;stock:number;minStock:number;sold:number;short:string;description:string;specs:string[];suitable:string[];color:string;size:string;weight:string;warranty:string;shipping:string};
export type Order={id:string;customer:string;mobile:string;city:string;date:string;status:"paid"|"pending"|"sent"|"cancelled";payment:"online"|"cod"|"transfer";items:number;total:number;profit:number};
export type Invoice={id:string;orderId:string;customer:string;date:string;dueDate:string;status:"paid"|"unpaid"|"overdue";subtotal:number;discount:number;shipping:number;tax:number;total:number};
export type StockMove={id:string;date:string;productId:string;productName:string;type:"in"|"out"|"adjust";qty:number;reason:string;operator:string};

export const categories=[
 {title:"Mountain",fa:"کوهستان",slug:"mountain",icon:"⛰️",count:4,desc:"مدل‌های هاردتیل واقعی از برندهای فعال در بازار ایران"},
 {title:"City",fa:"شهری و هیبرید",slug:"city",icon:"🏙️",count:1,desc:"برای رفت‌وآمد روزانه، ورزش و مسیرهای شهری"},
 {title:"Accessories",fa:"لوازم جانبی",slug:"accessories",icon:"🪖",count:0,desc:"کلاه، چراغ، قفل، پمپ و تجهیزات ایمنی"}
];

const img={
 giantTalon:"https://sunride.com.do/wp-content/uploads/2024/04/159-400x300.png",
 scottAspect:"https://cdn.shoplightspeed.com/shops/644001/files/60084924/1652x2313x2/scott-scott-aspect-950-orange.jpg",
 gitaneKobalt:"https://product-cdn-frz.alltricks.com/large/522/402522/402522/1378893",
 raleighMojave:"https://http2.mlstatic.com/D_Q_NP_717118-MLA79924320258_102024-R.webp",
 giantEscape:"https://cdn.shoplightspeed.com/shops/666477/files/52047286/800x800x3/giant-giant-escape-3.jpg"
};

export const products:Product[]=[
 {id:"giant-talon-3",sku:"GI-TALON3",name:"دوچرخه کوهستان Giant Talon 3",category:"mountain",subcategory:"هاردتیل 29 اینچ",brand:"Giant",price:0,cost:0,image:img.giantTalon,gallery:[img.giantTalon],badge:"مدل واقعی",rating:4.8,reviews:0,stock:0,minStock:0,sold:0,short:"فریم آلومینیوم ALUXX، سیستم دنده 2×8 و ترمز هیدرولیک Tektro",description:"Giant Talon 3 یک دوچرخه کوهستان هاردتیل برای شروع مسیرهای خاکی و استفاده ترکیبی شهری است. مشخصات محصول از صفحه رسمی فروش این مدل استخراج شده و قیمت به‌دلیل نوسان بازار ایران به‌صورت استعلامی نمایش داده می‌شود.",specs:["فریم ALUXX آلومینیوم","دوشاخ SR Suntour XCE با کورس 80 یا 100 میلی‌متر","دنده Shimano Altus / MicroSHIFT 2×8","ترمز هیدرولیک Tektro HDC M275","چرخ 29 اینچ Giant GX03V"],suitable:["مسیر خاکی","استفاده تفریحی","شروع MTB"],color:"Amber Glow / مشکی",size:"S / M / L",weight:"وابسته به سایز",warranty:"طبق شرایط واردکننده",shipping:"استعلام موجودی"},
 {id:"scott-aspect-950",sku:"SC-ASPECT950",name:"دوچرخه کوهستان Scott Aspect 950",category:"mountain",subcategory:"هاردتیل 29 اینچ",brand:"Scott",price:0,cost:0,image:img.scottAspect,gallery:[img.scottAspect],badge:"پیشنهاد حرفه‌ای",rating:4.9,reviews:0,stock:0,minStock:0,sold:0,short:"فریم آلومینیوم 6061، دوشاخ Suntour و ترمز هیدرولیک",description:"Scott Aspect 950 یک هاردتیل سبک و اقتصادی برای رکاب‌زن تازه‌کار و استفاده تفریحی است. مشخصات فنی از فروشگاه‌های تخصصی بین‌المللی و حضور برند Scott در شبکه فروش ایران تطبیق داده شده است.",specs:["فریم Alloy 6061","دوشاخ Suntour XCT30-HLO با کورس 100 میلی‌متر","دنده Shimano Altus هجده سرعته","ترمز هیدرولیک Tektro HDM275","تایر Kenda Booster 2.4"],suitable:["کوهستان سبک","مسیر جنگلی","استفاده شهری"],color:"نارنجی / خاکستری",size:"S / M / L / XL",weight:"حدود 14.4 کیلوگرم",warranty:"طبق شرایط نمایندگی",shipping:"استعلام موجودی"},
 {id:"gitane-kobalt-275",sku:"GT-KOBALT275",name:"دوچرخه کوهستان Gitane Kobalt 27.5",category:"mountain",subcategory:"هاردتیل 27.5 اینچ",brand:"Gitane",price:0,cost:0,image:img.gitaneKobalt,gallery:[img.gitaneKobalt],badge:"برند حاضر در ایران",rating:4.7,reviews:0,stock:0,minStock:0,sold:0,short:"فریم آلومینیوم 6061، سیستم دنده Shimano و ترمز دیسکی هیدرولیک",description:"Gitane Kobalt 27.5 یک دوچرخه هاردتیل با چرخ 27.5 اینچ و هندلینگ چابک است. برند Gitane در فروشگاه‌ها و نمایندگی‌های ایرانی عرضه شده و این مدل با مشخصات واقعی محصول معرفی می‌شود.",specs:["فریم آلومینیوم 6061 T6","دوشاخ Suntour XCT-DS با کورس 100 میلی‌متر","دنده 24 سرعته Shimano Altus/Acera","ترمز هیدرولیک Tektro HD-M290","تایر Kenda 27.5×2.10"],suitable:["مسیر شهری و خاکی","نوجوان و بزرگسال","رکاب‌زنی تفریحی"],color:"نارنجی",size:"38 تا 53 سانتی‌متر",weight:"وابسته به سایز",warranty:"طبق شرایط واردکننده",shipping:"استعلام موجودی"},
 {id:"raleigh-mojave-20",sku:"RL-MOJAVE20",name:"دوچرخه کوهستان Raleigh Mojave 2.0",category:"mountain",subcategory:"کوهستان 29 اینچ",brand:"Raleigh",price:0,cost:0,image:img.raleighMojave,gallery:[img.raleighMojave],badge:"محبوب بازار",rating:4.7,reviews:389,stock:0,minStock:0,sold:0,short:"فریم آلومینیوم، 21 دنده Shimano و ترمز دیسکی مکانیکی",description:"Raleigh Mojave 2.0 یک دوچرخه 29 اینچ برای رفت‌وآمد، تفریح و مسیرهای سبک است. اطلاعات فنی این صفحه از یک محصول واقعی فروشگاهی استخراج شده است.",specs:["فریم آلومینیوم","دوشاخ قفل‌شو Raleigh Sport","دنده 21 سرعته Shimano Tourney","ترمز دیسکی مکانیکی 160 میلی‌متر","چرخ 29 اینچ"],suitable:["شهر","مسیر خاکی سبک","استفاده روزانه"],color:"مشکی / آبی",size:"15 / 17 / 19 / 21 اینچ",weight:"حدود 15 کیلوگرم",warranty:"طبق شرایط فروشنده",shipping:"استعلام موجودی"},
 {id:"giant-escape-3",sku:"GI-ESCAPE3",name:"دوچرخه شهری Giant Escape 3",category:"city",subcategory:"هیبرید و شهری 700C",brand:"Giant",price:0,cost:0,image:img.giantEscape,gallery:[img.giantEscape],badge:"مناسب شهر",rating:4.8,reviews:0,stock:0,minStock:0,sold:0,short:"فریم ALUXX، دنده Shimano Tourney و تایر 700×38c",description:"Giant Escape 3 یک دوچرخه هیبرید برای رفت‌وآمد شهری، ورزش و مسیرهای آسفالت است. فرم نشستن راحت و امکان نصب ترک‌بند و گلگیر، آن را برای استفاده روزمره مناسب می‌کند.",specs:["فریم ALUXX آلومینیوم","دوشاخ فولادی با محل نصب ترک‌بند","دنده Shimano Tourney 3×7","ترمز Tektro Linear Pull","تایر Giant S-X3 سایز 700×38c"],suitable:["رفت‌وآمد شهری","ورزش روزانه","مسیر آسفالت"],color:"آبی / ذغالی",size:"S / M / L / XL",weight:"وابسته به سایز",warranty:"طبق شرایط نمایندگی",shipping:"استعلام موجودی"}
];

export const orders:Order[]=[];
export const invoices:Invoice[]=[];
export const stockMoves:StockMove[]=[];
export const customers:any[]=[];
export const formatPrice=(v:number)=>v>0?new Intl.NumberFormat("fa-IR").format(v)+" تومان":"استعلام قیمت";
export const findProduct=(id:string)=>products.find(p=>p.id===id);
export const topProducts=[...products];
export const lowStockProducts:Product[]=[];
export const totalRevenue=0;
export const totalProfit=0;
export const totalInventoryValue=0;
export const totalRetailInventoryValue=0;
