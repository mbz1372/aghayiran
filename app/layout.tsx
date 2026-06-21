import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
 title: "آقای ایران | فروشگاه تخصصی دوچرخه و لوازم جانبی",
 description: "خرید دوچرخه شهری، کوهستان، جاده‌ای، کودک، قطعات و لوازم جانبی از آقای ایران",
 keywords: ["دوچرخه","لوازم دوچرخه","فروشگاه دوچرخه","آقای ایران"],
 openGraph: { title:"آقای ایران", description:"فروشگاه تخصصی دوچرخه و لوازم جانبی", type:"website" }
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="fa" dir="rtl"><body><Header/>{children}<Footer/></body></html>
}
