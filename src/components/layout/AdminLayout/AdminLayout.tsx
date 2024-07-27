import { FC, ReactNode } from "react";
import AdminSidebar from "@components/ui/AdminSidebar/AdminSidebar";
import './AdminLayout.scss';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {

  return (

      <div className="AdminLayout h-100">
        <AdminSidebar />
        <div className="h-100">
          <div className="py-5 gutter-x">
            { children }
          </div>
        </div>
      </div> 
    
  );
}
export default AdminLayout