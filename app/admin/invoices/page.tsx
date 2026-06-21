import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import { invoices, formatPrice } from "@/lib/data";
export default function InvoicesPage(){
 return <AdminShell title="مدیریت فاکتورها" desc="صدور، پیگیری و کنترل وضعیت فاکتورهای فروش">
  <div className="grid md:grid-cols-3 gap-3 mb-5">
   <div className="admin-card p-5"><p className="text-slate-500">فاکتور پرداخت‌شده</p><b className="text-3xl text-forest">{invoices.filter(i=>i.status==='paid').length.toLocaleString('fa-IR')}</b></div>
   <div className="admin-card p-5"><p className="text-slate-500">پرداخت نشده</p><b className="text-3xl text-amber">{invoices.filter(i=>i.status==='unpaid').length.toLocaleString('fa-IR')}</b></div>
   <div className="admin-card p-5"><p className="text-slate-500">سررسید گذشته</p><b className="text-3xl text-red">{invoices.filter(i=>i.status==='overdue').length.toLocaleString('fa-IR')}</b></div>
  </div>
  <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>شماره فاکتور</th><th>سفارش</th><th>مشتری</th><th>تاریخ</th><th>سررسید</th><th>جمع کالا</th><th>تخفیف</th><th>ارسال</th><th>مبلغ نهایی</th><th>وضعیت</th><th>عملیات</th></tr></thead><tbody>{invoices.map(i=><tr key={i.id}><td className="font-bold">{i.id}</td><td>{i.orderId}</td><td>{i.customer}</td><td>{i.date}</td><td>{i.dueDate}</td><td>{formatPrice(i.subtotal)}</td><td>{formatPrice(i.discount)}</td><td>{formatPrice(i.shipping)}</td><td className="font-bold">{formatPrice(i.total)}</td><td><StatusBadge status={i.status}/></td><td><button className="btn btn-ghost py-2 min-h-9">چاپ</button></td></tr>)}</tbody></table></div>
 </AdminShell>
}
