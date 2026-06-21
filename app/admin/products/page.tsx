import AdminShell from "@/components/admin/AdminShell";
import { products, formatPrice } from "@/lib/data";
export default function ProductsPage(){
 return <AdminShell title="مدیریت محصولات" desc="تعریف کالا، قیمت، قیمت تمام‌شده، موجودی، برند و دسته‌بندی">
  <div className="admin-card p-5 mb-5">
   <h2 className="text-xl font-black mb-4">افزودن محصول جدید</h2>
   <div className="grid md:grid-cols-4 gap-3"><input className="input" placeholder="نام محصول"/><input className="input" placeholder="SKU"/><input className="input" placeholder="قیمت فروش"/><input className="input" placeholder="موجودی"/><select className="input"><option>دسته‌بندی</option><option>Mountain</option><option>Road</option><option>Accessory</option></select><input className="input md:col-span-2" placeholder="آدرس تصویر"/><button className="btn btn-primary">ذخیره محصول</button></div>
  </div>
  <div className="admin-card table-wrap"><table className="admin-table"><thead><tr><th>تصویر</th><th>SKU</th><th>نام</th><th>دسته</th><th>برند</th><th>قیمت خرید</th><th>قیمت فروش</th><th>موجودی</th><th>فروش</th><th>عملیات</th></tr></thead><tbody>{products.map(p=><tr key={p.id}><td><img src={p.image} className="w-14 h-14 object-cover rounded-xl"/></td><td className="font-bold">{p.sku}</td><td>{p.name}</td><td>{p.category}</td><td>{p.brand}</td><td>{formatPrice(p.cost)}</td><td>{formatPrice(p.price)}</td><td>{p.stock}</td><td>{p.sold}</td><td><button className="btn btn-ghost py-2 min-h-9">ویرایش</button></td></tr>)}</tbody></table></div>
 </AdminShell>
}
