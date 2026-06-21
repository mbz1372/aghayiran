import Link from "next/link";
import { categories } from "@/lib/data";
export default function FilterChips(){
 return <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1 -mx-4 px-4">
  {categories.map(c=><Link key={c.slug} href={`/shop?cat=${c.slug}`} className="badge bg-white border border-slate-200 whitespace-nowrap text-slate-700">{c.icon} {c.fa}</Link>)}
 </div>
}
