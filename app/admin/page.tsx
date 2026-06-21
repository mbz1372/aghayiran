import AdminShell from "@/components/admin/AdminShell";
import KpiCard from "@/components/admin/KpiCard";
import StatusBadge from "@/components/admin/StatusBadge";
import { orders, invoices, products, lowStockProducts, formatPrice, totalRevenue, totalProfit, totalInventoryValue, totalRetailInventoryValue } from "@/lib/data";
import { AlertTriangle, ArrowUpLeft, Boxes, ReceiptText, ShoppingBag } from "lucide-react";

export default function AdminDashboard(){
 const paidInvoices=invoices.filter(i=>i.status==="paid").length;
 const margin=Math.round((totalProfit/totalRevenue)*100);
 return <AdminShell title="داشبورد مدیریت" desc="نمای کلی فروش، سود، فاکتور و وضعیت موجودی انبار">
  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5">
   <KpiCard title="فروش تاییدشده" value={formatPrice(totalRevenue)} sub="بدون سفارش‌های لغوشده"/>
   <KpiCard title="سود ناخالص" value={formatPrice(totalProfit)} sub={`مارجین حدود ${margin.toLocaleString("fa-IR")}٪`} tone="blue"/>
   <KpiCard title="ارزش خرید موجودی" value={formatPrice(totalInventoryValue)} sub="بر اساس قیمت تمام‌شده" tone="amber"/>
   <KpiCard title="ارزش فروش موجودی" value={formatPrice(totalRetailInventoryValue)} sub="بر اساس قیمت فروش"/>
  </div>

  <div className="grid lg:grid-cols-3 gap-5 mt-5">
   <section className="admin-card p-5 lg:col-span-2">
    <div className="flex justify-between mb-4"><h2 className="text-xl font-black flex gap-2"><ShoppingBag/> سفارش‌های اخیر</h2><a href="/admin/orders" className="text-forest font-bold text-sm">همه</a></div>
    <div className="table-wrap"><table className="admin-table"><thead><tr><th>شماره</th><th>مشتری</th><th>شهر</th><th>مبلغ</th><th>وضعیت</th></tr></thead><tbody>{orders.slice(0,5).map(o=><tr key={o.id}><td className="font-bold">{o.id}</td><td>{o.customer}</td><td>{o.city}</td><td>{formatPrice(o.total)}</td><td><StatusBadge status={o.status}/></td></tr>)}</tbody></table></div>
   </section>

   <aside className="admin-card p-5">
    <h2 className="text-xl font-black flex gap-2"><AlertTriangle/> هشدار موجودی</h2>
    <p className="text-slate-500 text-sm mt-2">کالاهایی که نزدیک حداقل موجودی هستند.</p>
    <div className="grid gap-3 mt-5">{lowStockProducts.map(p=><div key={p.id} className="rounded-2xl bg-red/5 border border-red/10 p-3"><b className="text-sm">{p.name}</b><div className="flex justify-between text-xs mt-2"><span>موجودی: {p.stock.toLocaleString("fa-IR")}</span><span>حداقل: {p.minStock.toLocaleString("fa-IR")}</span></div></div>)}</div>
   </aside>
  </div>

  <div className="grid md:grid-cols-3 gap-5 mt-5">
   <div className="admin-card p-5"><ReceiptText className="text-forest"/><b className="block text-2xl mt-3">{paidInvoices.toLocaleString("fa-IR")}</b><p className="text-slate-500 text-sm mt-1">فاکتور پرداخت‌شده</p></div>
   <div className="admin-card p-5"><Boxes className="text-blue"/><b className="block text-2xl mt-3">{products.reduce((s,p)=>s+p.stock,0).toLocaleString("fa-IR")}</b><p className="text-slate-500 text-sm mt-1">موجودی کل کالا</p></div>
   <div className="admin-card p-5"><ArrowUpLeft className="text-amber"/><b className="block text-2xl mt-3">{orders.filter(o=>o.status==="pending").length.toLocaleString("fa-IR")}</b><p className="text-slate-500 text-sm mt-1">سفارش در انتظار</p></div>
  </div>
 </AdminShell>
}
