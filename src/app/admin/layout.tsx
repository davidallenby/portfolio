import type { Metadata } from "next";
import AuthGuardContainer from "@components/containers/AuthGuardContainer/AuthGuardContainer";
import SiteFooter from "@components/ui/SiteFooter/SiteFooter";

export const metadata: Metadata = {
  title: `Admin panel | David Allenby | Lead frontend developer based in Berlin, Germany`,
  description: "Admin area for my portfolio",
};

export default function AdminLayout({ children }
: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <main className="d-md-flex flex-column flex-grow-1">
        <AuthGuardContainer>
          { children } 
        </AuthGuardContainer>
      </main>
      <SiteFooter />
    </>
  );
}