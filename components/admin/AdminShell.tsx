import Link from "next/link";
import { BarChart3, Boxes, FileText, LayoutDashboard, Package, ReceiptText, ShoppingBag, Users } from "lucide-react";

export default function AdminShell({children,title,desc}:{children:React.ReactNode;title:string;desc?:string}){
 const nav=[
  ["/admin","داشبورد",LayoutDashboard],
  ["/admin/orders","سفارش‌ها",ShoppingBag],
  ["/admin/invoices","فاکتورها",ReceiptText],
  ["/admin/inventory","انبار",Boxes],
  ["/admin/products","محصولات",Package],
  ["/admin/customers","مشتریان",Users],
  ["/admin/reports","گزارش‌ها",BarChart3],
 ];
 return <main className="admin-container py-5 md:py-8">
  <div className="grid lg:grid-cols-[230px_1fr] gap-5">
   <aside className="admin-card p-3 h-max lg:sticky lg:top-28">
    <div className="p-3">
     <b className="text-xl">پنل آقای ایران</b>
     <p className="text-xs text-slate-500 mt-1">Sales / Invoice / Inventory</p>
    </div>
    <nav className="flex lg:grid gap-2 overflow-x-auto scrollbar-hide">
     {nav.map(([href,label,Icon]:any)=><Link key={href} href={href} className="min-w-max lg:min-w-0 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold hover:bg-mint hover:text-forest"><Icon size={18}/>{label}</Link>)}
    </nav>
   </aside>
   <section>
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
     <div><h1 className="text-3xl md:text-5xl font-black">{title}</h1>{desc&&<p className="text-slate-500 mt-2 leading-7">{desc}</p>}</div>
     <div className="flex gap-2"><button className="btn btn-ghost">خروجی Excel</button><button className="btn btn-primary">افزودن جدید</button></div>
    </div>
    {children}
   </section>
  </div>
 </main>
}
