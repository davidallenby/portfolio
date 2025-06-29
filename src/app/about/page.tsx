import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import SiteLayout from '@components/layout/SiteLayout/SiteLayout'
import Chip from '@components/ui/Chip/Chip'
import { LINKS } from '@constants/links'
import { ROUTES } from '@constants/navigation'
import Image from 'next/image'
import Link from 'next/link'

import WhoAmI from './WhoAmI'
import { chips } from './constants'
export default function About() {
  return (
    <SiteLayout>
      <ContentContainer contained={false}>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div className='flex w-full'>
              <div className='relative flex flex-col flex-grow-1'>
                <Image
                  className='AboutHeader__image img-fluid'
                  src={'/images/me-beach.jpg'}
                  alt={'Me at the beach'}
                  width={1024}
                  height={576}
                />
              </div>
            </div>
            <div className='w-full'>
              <h1>Hi, I&apos;m David</h1>
              <p>
                I&apos;m a Lead Frontend Developer with about 12 years of
                hands-on experience in the tech industry. Although I&apos;m
                completely self-taught, I&apos;ve worked across a variety of
                environments, from big financial institutions to agile startups
                and creative digital agencies. This diverse background has made
                me adaptable and skilled at delivering high-quality solutions
                tailored to different project needs
              </p>
              <p>
                Over the years, I&apos;ve had the chance to work on a wide range
                of projects in various sectors. Working with large financial
                institutions has given me a strong focus on security and
                performance, making sure the applications I build are solid and
                reliable. Meanwhile, my experience with startups and digital
                agencies has fine-tuned my ability to develop quickly and solve
                problems creatively, helping to bring fresh ideas to life
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
      <hr />
      <ContentContainer className='bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='w-full'>
            <h2>My toolkit</h2>
            <p>
              I&apos;ve had the opportunity to gain experience and knowledge
              with the following tools, languages, and frameworks.
            </p>
            <p>
              While I am a frontend developer first and foremost, I have had the
              opportunity to dive in to some backend development. Working with
              .NET Core web apps, and building frontend interfaces in Blazor. I
              have also built applications using PHP.
            </p>
            <p>
              <span>
                For a more detailed overview of my skills and experience, check
                out my{' '}
              </span>
              <Link href={LINKS.LINKEDIN}>LinkedIn</Link>
              <span> profile. Or </span>
              <Link href={ROUTES.CONTACT}>get in touch</Link>
              <span> and I will happily share my CV.</span>
            </p>
          </div>
          <div className='w-full flex items-center'>
            <div>
              {chips.map((item, i) => {
                const Icon = item.icon
                return (
                  <Chip icon={<Icon />} key={i} className='me-3 mb-3'>
                    {item.label}
                  </Chip>
                )
              })}
            </div>
          </div>
        </div>
      </ContentContainer>

      <WhoAmI />
    </SiteLayout>
  )
}
