import type { Metadata } from "next";
import AuthGuardContainer from "@components/containers/AuthGuardContainer/AuthGuardContainer";
import SiteFooter from "@components/ui/SiteFooter/SiteFooter";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";

export const metadata: Metadata = {
  title: `Admin panel | David Allenby | Lead frontend developer based in Berlin, Germany`,
  description: "Admin area for my portfolio",
};

export default function AdminLayout({ children }
: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <main className="d-flex flex-column flex-grow-1">
        <AuthGuardContainer>
          <div className="contained gutter-x d-flex flex-column flex-grow-1">
            <div className="row d-flex flex-column flex-grow-1">
              <div className="col-12 col-md-4 col-lg-3 d-flex flex-column flex-grow-1">
                <AdminSidebar />
              </div>
              <div className="col-12 col-md-8 col-lg-9 h-100">
                <div className="py-5">
                  { children }
                </div>
              </div>
            </div> 
          </div>
        </AuthGuardContainer>
      </main>
      <SiteFooter />
    </>
  );
}