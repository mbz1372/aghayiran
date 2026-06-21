import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import { products, stockMoves, formatPrice } from "@/lib/data";
export default function InventoryPage(){
 return <AdminShell title="مدیریت موجودی انبار" desc="کنترل موجودی، حداقل موجودی، ورود و خروج کالا">
  <div className="grid md:grid-cols-3 gap-3 mb-5">
   <div className="admin-card p-5"><p className="text-slate-500">موجودی کل</p><b className="text-3xl text-forest">{products.reduce((s,p)=>s+p.stock,0).toLocaleString('fa-IR')}</b></div>
   <div className="admin-card p-5"><p className="text-slate-500">کالاهای کم‌موجود</p><b className="text-3xl text-red">{products.filter(p=>p.stock<=p.minStock+2).length.toLocaleString('fa-IR')}</b></div>
   <div className="admin-card p-5"><p className="text-slate-500">ارزش خرید انبار</p><b className="text-2xl text-blue">{formatPrice(products.reduce((s,p)=>s+p.stock*p.cost,0))}</b></div>
  </div>

  <section className="admin-card p-5 mb-5">
   <h2 className="text-xl font-black mb-4">ثبت گردش انبار</h2>
   <div className="grid md:grid-cols-5 gap-3"><select className="input"><option>انتخاب کالا</option>{products.map(p=><option key={p.id}>{p.name}</option>)}</select><select className="input"><option>ورود</option><option>خروج</option><option>اصلاح</option></select><input className="input" placeholder="تعداد"/><input className="input" placeholder="علت"/><button className="btn btn-primary">ثبت گردش</button></div>
  </section>

  <div className="grid xl:grid-cols-2 gap-5">
   <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>SKU</th><th>کالا</th><th>موجودی</th><th>حداقل</th><th>ارزش خرید</th><th>وضعیت</th></tr></thead><tbody>{products.map(p=><tr key={p.id}><td className="font-bold">{p.sku}</td><td>{p.name}</td><td>{p.stock}</td><td>{p.minStock}</td><td>{formatPrice(p.cost*p.stock)}</td><td>{p.stock<=p.minStock+2?<span className="badge bg-red/10 text-red">نیاز به تامین</span>:<span className="badge bg-mint text-forest">اوکی</span>}</td></tr>)}</tbody></table></div>
   <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>کد</th><th>تاریخ</th><th>کالا</th><th>نوع</th><th>تعداد</th><th>علت</th><th>کاربر</th></tr></thead><tbody>{stockMoves.map(m=><tr key={m.id}><td className="font-bold">{m.id}</td><td>{m.date}</td><td>{m.productName}</td><td><StatusBadge status={m.type}/></td><td>{m.qty}</td><td>{m.reason}</td><td>{m.operator}</td></tr>)}</tbody></table></div>
  </div>
 </AdminShell>
}
