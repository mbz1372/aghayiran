import Link from "next/link";
import { Home, Search, ShoppingCart, UserRound, LayoutDashboard } from "lucide-react";
export default function MobileBottomNav(){
 const items=[["/","خانه",Home],["/admin","ادمین",LayoutDashboard],["/search","جستجو",Search],["/cart","سبد",ShoppingCart],["/account","حساب",UserRound]];
 return <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 mobile-safe shadow-[0_-12px_40px_rgba(16,24,40,.08)]">
  <div className="grid grid-cols-5 text-[11px]">
   {items.map(([href,label,Icon]:any)=><Link key={href} href={href} className="py-2 flex flex-col items-center gap-1 text-slate-600 active:text-forest"><Icon size={20}/><span>{label}</span></Link>)}
  </div>
 </nav>
}
