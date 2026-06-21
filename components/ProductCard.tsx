import Link from "next/link";
import { Heart, ShoppingBag, Star, Zap } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
export default function ProductCard({p}:{p:Product}){
 const off = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
 return <article className="card overflow-hidden group relative">
  <button className="absolute top-4 left-4 z-10 w-10 h-10 rounded-2xl bg-white/90 grid place-items-center"><Heart size={18}/></button>
  <Link href={`/product/${p.id}`} className="block relative h-64 overflow-hidden bg-slate-200">
   <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
   <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night/60 to-transparent"/>
   {p.badge && <span className="badge bg-gold absolute top-4 right-4"><Zap size={13}/>{p.badge}</span>}
   {off>0 && <span className="badge bg-danger text-white absolute bottom-4 right-4">{off.toLocaleString("fa-IR")}٪ تخفیف</span>}
  </Link>
  <div className="p-5">
   <div className="flex justify-between text-xs text-slate-500"><span>{p.brand}</span><span className="flex items-center gap-1 text-bronze"><Star size={14} className="fill-current"/>{p.rating} ({p.reviews.toLocaleString("fa-IR")})</span></div>
   <Link href={`/product/${p.id}`}><h3 className="font-black mt-3 min-h-14 leading-7 hover:text-forest">{p.name}</h3></Link>
   <p className="text-sm text-slate-500 mt-2 line-clamp-2">{p.description}</p>
   <div className="mt-4 flex flex-wrap gap-2">{p.specs.slice(0,2).map(s=><span key={s} className="badge bg-slate-100 text-slate-600">{s}</span>)}</div>
   <div className="mt-5 flex items-end justify-between gap-3">
    <div><b className="text-forest text-lg">{formatPrice(p.price)}</b>{p.oldPrice && <p className="text-xs text-slate-400 line-through">{formatPrice(p.oldPrice)}</p>}</div>
    <button className="btn btn-primary p-3"><ShoppingBag size={18}/></button>
   </div>
  </div>
 </article>
}
