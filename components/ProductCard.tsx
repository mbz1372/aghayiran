import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
export default function ProductCard({p,compact=false}:{p:Product;compact?:boolean}){
 const off=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
 return <article className="card overflow-hidden">
  <Link href={`/product/${p.id}`} className={`block relative overflow-hidden ${compact?"h-36":"h-48 sm:h-56"}`}>
   <img src={p.image} alt={p.name} className="w-full h-full object-cover"/>
   {p.badge&&<span className="badge bg-gold absolute top-3 right-3">{p.badge}</span>}
   {off>0&&<span className="badge bg-red text-white absolute bottom-3 right-3">{off.toLocaleString("fa-IR")}٪</span>}
  </Link>
  <div className={compact?"p-3":"p-4"}>
   <div className="flex justify-between gap-2 text-[11px] text-slate-500"><span>{p.subcategory}</span><span className="flex items-center gap-1 text-amber-600"><Star size={13} className="fill-current"/>{p.rating}</span></div>
   <Link href={`/product/${p.id}`}><h3 className={`font-black leading-7 mt-2 ${compact?"text-sm line-clamp-2":"min-h-14"}`}>{p.name}</h3></Link>
   {!compact&&<p className="text-xs text-slate-500 line-clamp-2 mt-1">{p.short}</p>}
   <div className="mt-3 flex items-end justify-between gap-2">
    <div><b className="text-forest text-sm sm:text-base">{formatPrice(p.price)}</b>{p.oldPrice&&<p className="text-[11px] text-slate-400 line-through">{formatPrice(p.oldPrice)}</p>}</div>
    <button className="btn btn-primary p-2 min-h-10 rounded-xl"><ShoppingBag size={17}/></button>
   </div>
  </div>
 </article>
}
