import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons';
import SiteLogo from '@components/ui/SiteLogo/SiteLogo';
import SiteNav from '@components/ui/SiteNav/SiteNav';
import { type FC } from 'react';
import { getCurrentYear } from '../../../helpers/common';
import './SiteFooter.scss';

const SiteFooter: FC = () => (
	<footer className="SiteFooter bg-primary">
		<div className="contained gutter-x">
			<div className="d-block d-md-flex justify-content-between flex-grow-1">
				<div className="mb-5 mb-md-0 d-flex align-items-center">
					<SiteLogo colorInverted className="me-4" />
					<small className="d-none d-md-block">
						<span>&copy; David Allenby {getCurrentYear()}</span>
					</small>
				</div>
				<SiteNav vertical colorInverted className="d-md-none mb-5" />
				<div className="d-flex align-items-center justify-content-md-end flex-grow-1">
					<SiteNav colorInverted className="d-none d-md-block mb-0 mt-2 me-4" />
					<ExternalIcons colorInverted className="mb-4 mb-md-0" />
				</div>

				<small className="d-block d-md-none">
					<span>&copy; David Allenby {getCurrentYear()}</span>
				</small>
			</div>
		</div>
	</footer>
);

export default SiteFooter;
