import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import { orders, formatPrice } from "@/lib/data";
export default function OrdersPage(){
 return <AdminShell title="مدیریت سفارش‌ها" desc="پیگیری سفارش، وضعیت پرداخت، ارسال و لغو">
  <div className="admin-card p-4 mb-5 grid md:grid-cols-4 gap-3">
   <input className="input" placeholder="جستجوی سفارش یا مشتری"/>
   <select className="input"><option>همه وضعیت‌ها</option><option>پرداخت شده</option><option>ارسال شده</option><option>در انتظار</option></select>
   <input className="input" placeholder="از تاریخ"/>
   <input className="input" placeholder="تا تاریخ"/>
  </div>
  <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>شماره سفارش</th><th>مشتری</th><th>موبایل</th><th>شهر</th><th>تاریخ</th><th>آیتم</th><th>مبلغ</th><th>سود</th><th>پرداخت</th><th>وضعیت</th><th>عملیات</th></tr></thead><tbody>{orders.map(o=><tr key={o.id}><td className="font-bold">{o.id}</td><td>{o.customer}</td><td className="ltr text-right">{o.mobile}</td><td>{o.city}</td><td>{o.date}</td><td>{o.items}</td><td>{formatPrice(o.total)}</td><td>{formatPrice(o.profit)}</td><td>{o.payment}</td><td><StatusBadge status={o.status}/></td><td><button className="btn btn-ghost py-2 min-h-9">جزئیات</button></td></tr>)}</tbody></table></div>
 </AdminShell>
}
