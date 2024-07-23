import { FC, ReactNode } from "react";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import './AdminLayoutContainer.scss';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayoutContainer: FC<AdminLayoutProps> = ({ children }) => {

  return (

      <div className="AdminLayoutContainer h-100">
        <AdminSidebar />
        <div className="h-100">
          <div className="py-5 gutter-x">
            { children }
          </div>
        </div>
      </div> 
    
  );
}
export default AdminLayoutContainer