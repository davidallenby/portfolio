import type { Metadata } from "next";
import '../assets/styles/index.scss';
import SiteHeader from "@components/SiteHeader";
import SiteFooter from "@components/SiteFooter/SiteFooter";

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
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
