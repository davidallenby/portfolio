import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import { ROUTES } from '@constants/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function WhoAmI() {
  return (
    <ContentContainer className='bg-beige'>
      <div className='row flex-row-reverse'>
        <div className='w-full lg:w-6/12 mb-5 lg:mb-0'>
          <h2>Who am I?</h2>
          <p>
            Originally from Northern Ireland, I&apos;ve spent the last 14 years
            living and working in the vibrant tech scene of Melbourne,
            Australia. Recently, I took the plunge and went traveling for a well
            earned extended break. I&apos;m now ready to get back to it and
            I&apos;m looking for my next opportunity.
          </p>
          <p>
            When I&apos;m not immersed in code, I love staying active and
            fueling my passion for football. Fitness is a big part of my life,
            and you&apos;ll often find me exploring new ways to stay in shape.
            My wanderlust has taken me to 16 countries so far, and my travel
            bucket list keeps growing.
          </p>
          <p>
            <span>In my spare time, I&apos;m also the co-founder of a</span>{' '}
            <Link href={`http://camplete.com.au`} target='_blank'>
              camping startup
            </Link>{' '}
            <span>
              based in Sydney, Australia, where I channel my entrepreneurial
              spirit and love for the great outdoors. I&apos;m currently looking
              for freelance opportunities, so if you have a project in mind,{' '}
            </span>
            <Link href={ROUTES.CONTACT}>get in touch!</Link>
          </p>
        </div>
        <div className='w-full lg:w-6/12 AboutMe__img-grid'>
          <div>
            <Image
              src={'/images/tv-tower.jpg'}
              alt='Berlin TV Tower'
              width={600}
              height={600}
              className='img-fluid'
            />
          </div>
          <div>
            <Image
              src={'/images/brandenburg-gate.jpeg'}
              alt='Berlin TV Tower'
              width={600}
              height={600}
              className='img-fluid'
            />
          </div>
          <div>
            <Image
              src={'/images/me-forest.jpg'}
              alt='Berlin TV Tower'
              width={600}
              height={600}
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}
