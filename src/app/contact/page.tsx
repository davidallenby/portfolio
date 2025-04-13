import ContentContainer from '@components/layout/ContentContainer/ContentContainer';
import SiteLayout from '@components/layout/SiteLayout/SiteLayout';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<SiteLayout>
			<ContentContainer>
				<div className="Contact mx-auto" style={{ maxWidth: 800 }}>
					<h1 className="text-center">Contact me</h1>
					<p>
						If you have a project that you&apos;d like to work together on, would like to know more about my portfolio, or
						have any general questions at all. Feel free to drop me a message!
					</p>
					<ContactForm />
				</div>
			</ContentContainer>
		</SiteLayout>
	);
}
