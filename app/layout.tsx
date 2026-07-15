import type {Metadata} from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@fontsource/vazirmatn/900.css";
import "./globals.css";
import "./experience.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import {CompareProvider} from "@/components/CompareProvider";

export const metadata:Metadata={
 metadataBase:new URL("https://aghayiran.vercel.app"),
 title:{default:"آقای ایران | فروشگاه تخصصی دوچرخه و لوازم جانبی",template:"%s | آقای ایران"},
 description:"بررسی، مقایسه و خرید دوچرخه‌های واقعی برندهای فعال در بازار ایران به‌همراه لوازم جانبی و راهنمای تخصصی انتخاب.",
 keywords:["خرید دوچرخه","دوچرخه کوهستان","دوچرخه جاینت","دوچرخه اسکات","دوچرخه گیتان","دوچرخه رالی","لوازم جانبی دوچرخه"],
 openGraph:{title:"آقای ایران",description:"فروشگاه تخصصی دوچرخه‌های برند و لوازم جانبی",type:"website",locale:"fa_IR"},
 robots:{index:true,follow:true}
};

export default function Layout({children}:{children:React.ReactNode}){
 return <html lang="fa" dir="rtl"><body><CompareProvider><Header/>{children}<Footer/><MobileBottomNav/></CompareProvider></body></html>
}