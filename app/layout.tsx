import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
export const metadata: Metadata={title:"آقای ایران | فروشگاه و پنل مدیریت دوچرخه",description:"فروشگاه دوچرخه به همراه پنل مدیریت فروش، فاکتور و موجودی انبار"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body><Header/>{children}<Footer/><MobileBottomNav/></body></html>}
