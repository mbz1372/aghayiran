import { findProduct, products, formatPrice } from "@/lib/data";
import { notFound } from "next/navigation";
import { ShoppingCart, ShieldCheck } from "lucide-react";
export function generateStaticParams(){return products.map(p=>({id:p.id}))}
export default function ProductPage({params}:{params:{id:string}}){
 const p=findProduct(params.id); if(!p) return notFound();
 return <main className="container py-12">
  <div className="grid lg:grid-cols-2 gap-8">
   <div className="card overflow-hidden"><img src={p.image} className="w-full h-[520px] object-cover"/></div>
   <div className="card p-8">
    {p.badge && <span className="badge bg-brand-gold">{p.badge}</span>}
    <h1 className="text-4xl font-black leading-tight mt-5">{p.name}</h1>
    <p className="text-slate-600 leading-9 mt-5">{p.description}</p>
    <div className="mt-6"><b className="text-3xl text-brand">{formatPrice(p.price)}</b>{p.oldPrice && <p className="line-through text-slate-400 mt-1">{formatPrice(p.oldPrice)}</p>}</div>
    <div className="grid sm:grid-cols-2 gap-3 mt-6">{p.specs.map(s=><div key={s} className="bg-slate-100 rounded-2xl p-4 font-bold">{s}</div>)}</div>
    <div className="flex gap-3 mt-8"><button className="btn btn-primary flex-1"><ShoppingCart/> افزودن به سبد خرید</button><button className="btn btn-ghost">مشاوره خرید</button></div>
    <p className="flex items-center gap-2 text-brand mt-6"><ShieldCheck/> ضمانت اصالت و سلامت فیزیکی کالا</p>
   </div>
  </div>
 </main>
}
