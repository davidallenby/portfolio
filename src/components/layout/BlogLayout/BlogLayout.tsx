'use client'
import BlogFiltersMobile from '@modules/BlogFiltersMobile/BlogFiltersMobile'
import BlogSidebar from '@modules/BlogSidebar/BlogSidebar'
import { type FC, type ReactNode } from 'react'

interface BlogLayoutProps {
	children: ReactNode
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
	return (
		<div className="container px-4 py-12">
			<div className="mx-auto flex flex-col lg:flex-row">
				<div className="lg:hidden mb-8">
					<BlogFiltersMobile />
				</div>

				<div className="BlogLayout__content lg:border-r border-primary-100 lg:pr-16 lg:w-1/2 xl:w-7/12">
					<h2 className="visually-hidden">Posts</h2>
					{children}
				</div>

				<div className="hidden lg:block pl-16 lg:w-1/2 xl:w-5/12">
					<BlogSidebar />
				</div>
			</div>
		</div>
	)
}

export default BlogLayout
