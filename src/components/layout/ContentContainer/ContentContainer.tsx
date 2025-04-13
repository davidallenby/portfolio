'use client';

import { type FC, type ReactNode } from 'react';
import './ContentContainer.scss';

interface ContentContainerProps {
	children: ReactNode;
	className?: string;
	contained?: boolean;
}

const ContentContainer: FC<ContentContainerProps> = ({ children, className, contained = true }) => {
	return (
		<section className={`ContentContainer${className ? ' ' + className : ''}`}>
			{contained ? <div className={`gutter-x contained`}>{children}</div> : children}
		</section>
	);
};

export default ContentContainer;
