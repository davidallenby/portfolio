import ContentContainer from '@components/layout/ContentContainer/ContentContainer';
import SiteLayout from '@components/layout/SiteLayout/SiteLayout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <SiteLayout>
      <ContentContainer>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <Link href="/">Go to Home</Link>
      </ContentContainer>
    </SiteLayout>
  );
}