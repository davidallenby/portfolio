import type { Metadata } from "next";
import '../assets/styles/index.scss';
import SiteHeader from "@components/ui/SiteHeader";
import SiteFooter from "@components/ui/SiteFooter/SiteFooter";
import AuthBanner from "@components/layout/AuthBanner/AuthBanner";
import MainApp from "@components/layout/MainApp/MainApp";

export const metadata: Metadata = {
  title: `David Allenby | Lead frontend developer based in Berlin, Germany`,
  description: "Hi, I'm David. I'm a lead frontend developer based in Berlin, Germany. I like making apps, and taking naps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="d-flex flex-column flex-grow-1 h-100">
      <body className="d-flex flex-column flex-grow-1">
        <MainApp>
          <AuthBanner />
          <SiteHeader />
          <main className="d-flex flex-column flex-grow-1">
          {children}
          </main>
          <SiteFooter />
        </MainApp>
      </body>
    </html>
  );
}
