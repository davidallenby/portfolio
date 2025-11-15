import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import { ROUTES } from '@constants/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function WhoAmI() {
	return (
		<ContentContainer className="bg-beige">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
				<div className="w-full">
					<h2>Who am I?</h2>
					<p>
						Originally from Northern Ireland, I&apos;ve spent the last 14 years living and working in the vibrant tech scene
						of Melbourne, Australia. Recently, I took the plunge and went traveling for a well earned extended break. I&apos;m
						now ready to get back to it and I&apos;m looking for my next opportunity.
					</p>
					<p>
						When I&apos;m not immersed in code, I love staying active and fueling my passion for football. Fitness is a big
						part of my life, and you&apos;ll often find me exploring new ways to stay in shape. My wanderlust has taken me to
						16 countries so far, and my travel bucket list keeps growing.
					</p>
					<p>
						<span>In my spare time, I&apos;m also the co-founder of a</span>{' '}
						<Link href={`http://camplete.com.au`} target="_blank">
							camping startup
						</Link>{' '}
						<span>
							based in Sydney, Australia, where I channel my entrepreneurial spirit and love for the great outdoors. I&apos;m
							currently looking for freelance opportunities, so if you have a project in mind,{' '}
						</span>
						<Link href={ROUTES.CONTACT}>get in touch!</Link>
					</p>
				</div>
				<div className="w-full grid grid-cols-2 grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-3">
					<div className="relative col-span-1 row-span-2 md:row-span-1 md:col-start-1 md:row-start-1">
						<Image
							src={'/images/me-forest.jpg'}
							alt="Me in the forest"
							width={600}
							height={600}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="relative col-span-1 md:col-start-2 md:row-start-1">
						<Image
							src={'/images/brandenburg-gate.jpeg'}
							alt="Me at theBrandenburg Gate"
							width={600}
							height={600}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="relative col-span-1 md:col-start-3 md:row-start-1">
						<Image
							src={'/images/me-camera.jpeg'}
							alt="Me with a camera in the forest"
							width={600}
							height={600}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</ContentContainer>
	)
}
