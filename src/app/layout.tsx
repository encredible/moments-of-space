import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import MarqueeText from "@/app/components/layout/MarqueeText";
import NavigationBar from "@/app/components/layout/NavigationBar";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-korean antialiased min-h-screen">
        <Analytics />
        <MarqueeText className="sticky top-0 z-50" />
        <NavigationBar /> {/* Add NavigationBar here */}
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
