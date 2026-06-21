import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
export default function ProductCard({p}:{p:Product}){
 return <article className="card overflow-hidden group">
  <Link href={`/product/${p.id}`} className="block relative h-56 overflow-hidden">
   <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
   {p.badge && <span className="badge bg-brand-gold absolute top-4 right-4">{p.badge}</span>}
  </Link>
  <div className="p-5">
   <div className="flex justify-between text-xs text-slate-500"><span>{p.brand}</span><span className="flex items-center gap-1"><Star size={14} className="fill-current"/>{p.rating}</span></div>
   <Link href={`/product/${p.id}`}><h3 className="font-black mt-3 min-h-14 leading-7">{p.name}</h3></Link>
   <p className="text-sm text-slate-500 mt-2 line-clamp-2">{p.description}</p>
   <div className="mt-5 flex items-end justify-between gap-3">
    <div><b className="text-brand">{formatPrice(p.price)}</b>{p.oldPrice && <p className="text-xs text-slate-400 line-through">{formatPrice(p.oldPrice)}</p>}</div>
    <button className="btn btn-primary p-3"><ShoppingBag size={18}/></button>
   </div>
  </div>
 </article>
}
