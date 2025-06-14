import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MarqueeText from "@/app/components/MarqueeText";
import NavigationBar from "@/app/components/NavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-korean antialiased min-h-screen">
        <MarqueeText className="sticky top-0 z-50" />
        <NavigationBar /> {/* Add NavigationBar here */}
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
