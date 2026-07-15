# Aghaye Iran World-Class Commerce

نسخه پریمیوم فروشگاه دوچرخه آقای ایران، طراحی‌شده برای Vercel با Next.js App Router.

## تجربه فروشگاه
- Hero سینمایی و ادیتوریال
- دسته‌بندی تجربه‌محور Mountain / Road / City / Gravel
- Bike Finder تعاملی در سه مرحله
- مقایسه حداکثر سه محصول
- صفحه محصول، فروشگاه، سبد خرید و Checkout
- Garage مشتری برای ثبت دوچرخه و سرویس دوره‌ای
- مجله و صفحات محتوایی سئوپذیر
- پنل مدیریت فروش، فاکتور، موجودی، مشتری و گزارش
- تجربه Mobile-first و Bottom Navigation

## SEO
- Metadata و OpenGraph
- sitemap.xml داینامیک
- robots.txt
- URL اختصاصی محصول
- ساختار Semantic Heading

## اجرا
```bash
npm install
npm run dev
```

## Deploy روی Vercel
1. پوشه را در GitHub قرار دهید.
2. در Vercel گزینه New Project را انتخاب کنید.
3. Repository را Import کنید.
4. Framework باید Next.js تشخیص داده شود.
5. Deploy را بزنید.

## مسیرهای مهم
- `/` خانه
- `/shop` فروشگاه
- `/product/rock-540` محصول
- `/compare` مقایسه
- `/garage` گاراژ مشتری
- `/blog` مجله
- `/admin` مدیریت

## نکته
داده‌ها در این نسخه نمونه و Front-end هستند. اتصال پرداخت، دیتابیس، احراز هویت و ذخیره دائمی سفارش در فاز Backend انجام می‌شود.
