import AdminShell from "@/components/admin/AdminShell";
import KpiCard from "@/components/admin/KpiCard";
import { orders, products, formatPrice, totalRevenue, totalProfit } from "@/lib/data";
export default function ReportsPage(){
 const revenueByCity = ["تهران","مشهد","شیراز","اصفهان","کرج"].map(city=>({city,total:orders.filter(o=>o.city===city).reduce((s,o)=>s+o.total,0)}));
 const top = [...products].sort((a,b)=>b.sold-a.sold).slice(0,5);
 return <AdminShell title="گزارش‌های مدیریتی" desc="تحلیل فروش، سود، شهرها و کالاهای پرفروش">
  <div className="grid md:grid-cols-4 gap-3 mb-5">
   <KpiCard title="فروش کل" value={formatPrice(totalRevenue)}/>
   <KpiCard title="سود کل" value={formatPrice(totalProfit)} tone="blue"/>
   <KpiCard title="تعداد سفارش" value={orders.length.toLocaleString('fa-IR')} tone="amber"/>
   <KpiCard title="میانگین سفارش" value={formatPrice(Math.round(totalRevenue/orders.length))}/>
  </div>
  <div className="grid lg:grid-cols-2 gap-5">
   <section className="admin-card p-5"><h2 className="text-xl font-black mb-5">فروش بر اساس شهر</h2><div className="grid gap-4">{revenueByCity.map(r=><div key={r.city}><div className="flex justify-between text-sm mb-2"><b>{r.city}</b><span>{formatPrice(r.total)}</span></div><div className="h-3 bg-cloud rounded-full overflow-hidden"><div className="h-full bg-forest rounded-full" style={{width:`${Math.max(8, r.total/totalRevenue*100)}%`}}/></div></div>)}</div></section>
   <section className="admin-card p-5"><h2 className="text-xl font-black mb-5">پرفروش‌ترین کالاها</h2><div className="grid gap-3">{top.map(p=><div key={p.id} className="flex items-center gap-3"><img src={p.image} className="w-14 h-14 object-cover rounded-2xl"/><div className="flex-1"><b className="text-sm">{p.name}</b><p className="text-xs text-slate-500">{p.sold.toLocaleString('fa-IR')} فروش</p></div><span className="badge bg-mint text-forest">{formatPrice(p.sold*p.price)}</span></div>)}</div></section>
  </div>
 </AdminShell>
}
