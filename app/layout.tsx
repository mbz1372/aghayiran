import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "آقای ایران | فروشگاه دوچرخه و لوازم جانبی",
  description: "فروشگاه اینترنتی دوچرخه، قطعات و لوازم جانبی آقای ایران",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="fa" dir="rtl"><body><Header />{children}<Footer /></body></html>;
}
