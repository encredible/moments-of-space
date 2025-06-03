import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageLayout from "@/app/components/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-korean antialiased flex flex-col min-h-screen">
        <Header />
        <PageLayout>
          {children}
        </PageLayout>
        <Footer />
      </body>
    </html>
  );
}
