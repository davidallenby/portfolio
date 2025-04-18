import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import SiteLayout from '@components/layout/SiteLayout/SiteLayout'
import Chip from '@components/ui/Chip/Chip'
import { LINKS } from '@constants/links'
import { ROUTES } from '@constants/navigation'
import type { ChipInterface } from '@interfaces/ui.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaAngular,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass
} from 'react-icons/fa'
import { IoLogoCapacitor, IoLogoFirebase } from 'react-icons/io5'
import { SiJquery, SiVite, SiWebpack } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import './About.scss'

export default function About() {
  const chips: ChipInterface[] = [
    {
      label: 'HTML',
      icon: <FaHtml5 />
    },
    {
      label: 'CSS',
      icon: <FaCss3 />
    },
    {
      label: 'JavaScript',
      icon: <FaJs />
    },
    {
      label: 'React',
      icon: <FaReact />
    },
    {
      label: 'React Native',
      icon: <TbBrandReactNative />
    },
    {
      label: 'Angular',
      icon: <FaAngular />
    },
    {
      label: 'Node JS',
      icon: <FaNodeJs />
    },
    {
      label: 'Firebase',
      icon: <IoLogoFirebase />
    },
    {
      label: 'Capacitor',
      icon: <IoLogoCapacitor />
    },
    {
      label: 'Git',
      icon: <FaGithub />
    },
    {
      label: 'jQuery',
      icon: <SiJquery />
    },
    {
      label: 'SASS',
      icon: <FaSass />
    },
    {
      label: 'Webpack',
      icon: <SiWebpack />
    },
    {
      label: 'Vite',
      icon: <SiVite />
    }
  ]

  return (
    <SiteLayout>
      <ContentContainer contained={false}>
        <div className='container mx-auto'>
          <div className='row'>
            <div className='flex w-full md:w-6/12 mb-5 md:mb-0'>
              <div className='AboutHeader__image-wrapper flex flex-col flex-grow-1'>
                <Image
                  className='AboutHeader__image img-fluid'
                  src={'/images/me-beach.jpg'}
                  alt={'Me at the beach'}
                  width={1024}
                  height={576}
                />
              </div>
            </div>
            <div className='w-full md:w-6/12'>
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
        <div className='row'>
          <div className='w-full lg:w-6/12 mb-4 lg:mb-0'>
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
          <div className='w-full lg:w-6/12 flex items-center'>
            <div>
              {chips.map((item, i) => {
                return (
                  <Chip icon={item.icon} key={i} className='me-3 mb-3'>
                    {item.label}
                  </Chip>
                )
              })}
            </div>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer className='bg-beige'>
        <div className='row flex-row-reverse'>
          <div className='w-full lg:w-6/12 mb-5 lg:mb-0'>
            <h2>Who am I?</h2>
            <p>
              Originally from Northern Ireland, I&apos;ve spent the last 14
              years living and working in the vibrant tech scene of Melbourne,
              Australia. Recently, I took the plunge and went traveling for a
              well earned extended break. I&apos;m now ready to get back to it
              and I&apos;m looking for my next opportunity.
            </p>
            <p>
              When I&apos;m not immersed in code, I love staying active and
              fueling my passion for football. Fitness is a big part of my life,
              and you&apos;ll often find me exploring new ways to stay in shape.
              My wanderlust has taken me to 16 countries so far, and my travel
              bucket list keeps growing.
            </p>
            <p>
              <span>
                In my spare time, I&apos;m also the co-founder of a{' '}
                <Link href={`http://camplete.com.au`} target='_blank'>
                  camping startup
                </Link>{' '}
                based in Sydney, Australia, where I channel my entrepreneurial
                spirit and love for the great outdoors. I&apos;m currently
                looking for freelance opportunities, so if you have a project in
                mind,{' '}
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
    </SiteLayout>
  )
}
