import type { Metadata } from "next";
import '../assets/styles/index.scss';

export const metadata: Metadata = {
  title: `Lead Frontend Developer | David Allenby`,
  description: "Hi, I'm David. I'm a lead frontend developer based in Berlin, Germany. I like making apps, and taking naps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
