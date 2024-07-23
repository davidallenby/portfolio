'use client'

import { FC } from "react";
import './AdminSidebar.scss';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {}

const AdminSidebar: FC<AdminSidebarProps> = () => {
  const path = usePathname();

  return (
    <div className='AdminSidebar h-100'>
      <ul className="list-unstyled py-5">
        <li>
          <Link 
            href="/admin/blog-posts"
            className={`text-decoration-none d-block${path === '/admin/blog-posts' ? ' active' : ''}`}
          >Blog posts</Link>
        </li>
        <li>
          <Link 
            href="/admin/"
            className={`text-decoration-none d-block${path === '/admin/projects' ? ' active' : ''}`}
          >Projects</Link>
        </li>
        <li>
          <Link 
            href="/admin/"
            className={`text-decoration-none d-block${path === '/admin/projects' ? ' active' : ''}`}
          >Contact requests</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;