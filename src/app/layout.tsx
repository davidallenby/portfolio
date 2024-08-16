import type { Metadata } from "next";
import '../styles/index.scss';
import '../../node_modules/react-loading-skeleton/dist/skeleton.css'
import ReactQueryProvider from "@context/ReactQueryProvider"

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
          <ReactQueryProvider>
            { children }
          </ReactQueryProvider>
      </body>
    </html>
  );
}
