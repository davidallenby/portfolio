import FeaturedProjectLink from '@components/content/FeaturedProjectLink'
import FeaturedProjects from '@components/content/FeaturedProjects'
import HomeHeroBanner from '@components/content/HomeHeroBanner'
import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import FlexGrid from '@components/layout/FlexGrid/FlexGrid'
import SiteLayout from '@components/layout/SiteLayout/SiteLayout'
import { LINKS } from '@constants/links'
import FeaturedArticles from '@modules/FeaturedArticles/FeaturedArticles'
import OILogo from '@svg/openinvest-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { getYearsExperience } from '../helpers/common'

export default async function Home() {
  return (
    <SiteLayout>
      <HomeHeroBanner />

      <hr />

      <ContentContainer className=''>
        <h2 className='mb-4'>Featured projects</h2>
        <FeaturedProjects>
          <FeaturedProjectLink href={'https://camplete.com.au'}>
            <video
              controls={false}
              autoPlay={true}
              loop
              playsInline
              className='w-full h-auto object-cover'
            >
              <source src='/video/camplete-logo.webm' type='video/webm' />
            </video>
          </FeaturedProjectLink>

          <FeaturedProjectLink
            href={'https://openinvest.com.au'}
            className='bg-[#008476]/10'
          >
            <OILogo className='max-w-9/12 mx-auto block' />
          </FeaturedProjectLink>
        </FeaturedProjects>
        <div className='text-center'>
          <Link
            href={LINKS.GITHUB}
            className='btn btn-outline-primary inline-flex items-center'
          >
            <BsGithub className='me-2' />
            <span>View GitHub</span>
          </Link>
        </div>
      </ContentContainer>

      <hr />

      <ContentContainer className='bg-white'>
        <FlexGrid>
          <div className='w-full lg:w-6/12 flex flex-col justify-center mb-5 lg:mb-0'>
            <div>
              <h2>About me</h2>
              <p>
                With around {getYearsExperience()} years experience in software
                development I have a wealth of experience dealing with complex
                problems and implementing solutions. I&apos;m a frontend
                engineer first and foremost, however I do have experience with
                building backend systems, UX design, and an understanding of
                CI/CD pipelines.
              </p>
              <p className='mb-5'>
                <span>If you&apos;d like to know more, check out the </span>
                <Link href={`/about`}>about page</Link>
                <span>, or visit my </span>
                <a href={LINKS.LINKEDIN} target='_blank' rel='noreferrer'>
                  LinkedIn
                </a>
                <span> for more details about my experience.</span>
              </p>
              <Link href={`/about`} className='btn btn-outline-primary'>
                Learn more
              </Link>
            </div>
          </div>
          <div className='AboutMe__image w-full lg:w-6/12'>
            <Image
              className='img-fluid'
              src={`/images/me-alligator-gorge.jpg`}
              alt='Me hiking through alligator gorge'
              width={1024}
              height={576}
            />
          </div>
        </FlexGrid>
      </ContentContainer>

      <ContentContainer className='bg-beige'>
        <FeaturedArticles title='Recent articles' />
      </ContentContainer>
    </SiteLayout>
  )
}
