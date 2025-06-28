import HomeHeroBanner from '@components/content/HomeHeroBanner'
import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import SiteLayout from '@components/layout/SiteLayout/SiteLayout'
import LinkButton from '@components/ui/Button/LinkButton'
import { LINKS } from '@constants/links'
import FeaturedArticles from '@modules/FeaturedArticles/FeaturedArticles'
import FeaturedProjectLink from '@modules/FeaturedProjects/FeaturedProjectLink'
import FeaturedProjects from '@modules/FeaturedProjects/FeaturedProjects'
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

      <ContentContainer>
        <h2 className='mb-4'>Featured projects</h2>
        <FeaturedProjects className='mb-8'>
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
          <LinkButton
            href={LINKS.GITHUB}
            variant='secondary'
            leftIcon={<BsGithub />}
          >
            View GitHub
          </LinkButton>
        </div>
      </ContentContainer>

      <hr />

      <ContentContainer className='bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24'>
          <div className='flex flex-col justify-center mb-5 lg:mb-0'>
            <h2>About me</h2>
            <p>
              With around {getYearsExperience()} years experience in software
              development I have a wealth of experience dealing with complex
              problems and implementing solutions. I&apos;m a frontend engineer
              first and foremost, however I do have experience with building
              backend systems, UX design, and an understanding of CI/CD
              pipelines.
            </p>
            <p className='mb-8!'>
              <span>If you&apos;d like to know more, check out the </span>
              <Link href={`/about`}>about page</Link>
              <span>, or visit my </span>
              <Link href={LINKS.LINKEDIN} target='_blank' rel='noreferrer'>
                LinkedIn
              </Link>
              <span> for more details about my experience.</span>
            </p>
            <div>
              <LinkButton href={`/about`} variant='secondary'>
                Learn more
              </LinkButton>
            </div>
          </div>
          <div className='relative min-h-[300px]'>
            <Image
              className='img-fluid'
              src={`/images/me-alligator-gorge.jpg`}
              alt='Me hiking through alligator gorge'
              width={1024}
              height={576}
            />
          </div>
        </div>
      </ContentContainer>

      <ContentContainer className='bg-beige'>
        <FeaturedArticles title='Recent articles' />
      </ContentContainer>
    </SiteLayout>
  )
}
