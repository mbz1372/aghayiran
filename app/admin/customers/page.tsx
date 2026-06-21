import AdminShell from "@/components/admin/AdminShell";
import { customers, formatPrice } from "@/lib/data";
export default function CustomersPage(){
 return <AdminShell title="مدیریت مشتریان" desc="لیست مشتریان، تعداد سفارش و ارزش خرید">
  <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>نام مشتری</th><th>موبایل</th><th>تعداد سفارش</th><th>جمع خرید</th><th>سگمنت</th><th>عملیات</th></tr></thead><tbody>{customers.map(c=><tr key={c.mobile}><td className="font-bold">{c.name}</td><td className="ltr text-right">{c.mobile}</td><td>{c.orders}</td><td>{formatPrice(c.total)}</td><td><span className="badge bg-mint text-forest">{c.segment}</span></td><td><button className="btn btn-ghost py-2 min-h-9">جزئیات</button></td></tr>)}</tbody></table></div>
 </AdminShell>
}
