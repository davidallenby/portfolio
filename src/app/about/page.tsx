import ContentContainer from "@components/Containers/ContentContainer/ContentContainer";
import { getYearsExperience } from "../../helpers/common";
import Image from 'next/image';
import './About.scss'
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { ChipInterface } from "../../interfaces/ui.interfaces";
import Chip from "@components/Content/Chip/Chip";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoCapacitor, IoLogoFirebase } from "react-icons/io5";
import { SiJquery, SiVite, SiWebpack } from "react-icons/si";
import Link from "next/link";
import { LINKS } from "../../constants/links";

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

  // const experience: ExperienceItemInterface[] = [
  //   {
  //     role: 'Lead frontend developer',
  //     employerName: 'OpenInvest Australia',
  //     location: 'Melbourne, AU',
  //     dates: 'July 2023 - February 2024'
  //   },
  //   {
  //     role: 'Senior frontend developer',
  //     employerName: 'OpenInvest Australia',
  //     location: 'Melbourne, AU',
  //     dates: 'October 2020 - July 2023'
  //   },
  //   {
  //     role: 'Senior frontend developer & UX designer',
  //     employerName: 'Australian Council for Educational Research',
  //     location: 'Melbourne, AU',
  //     dates: 'August 2017 - October 2020'
  //   },
  //   {
  //     role: 'Lead developer',
  //     employerName: 'The Refinery',
  //     location: 'Melbourne, AU',
  //     dates: 'May 2016 - June 2017'
  //   },
  //   {
  //     role: 'Frontend developer',
  //     employerName: 'National Australia Bank',
  //     location: 'Melbourne, AU',
  //     dates: 'June 2015 - May 2016'
  //   }
  // ]

  return (
    <main>
      <ContentContainer contained={false}>
        <div className="contained gutter-x">
          <div className="row">
            <div className="d-flex col-12 col-md-6 mb-5 mb-md-0">
              <div className="AboutHeader__image-wrapper d-flex flex-column flex-grow-1">
                <Image 
                  className="AboutHeader__image img-fluid"
                  src={'/images/me-beach.jpg'} 
                  alt={'Me at the beach'}
                  width={1024}
                  height={576}
                />  
              </div>
            
            </div>
            <div className="col-12 col-md-6">
              <h1>Hi, I&apos;m David</h1>
              <p>I&apos;m a seasoned Lead Frontend Developer with around {getYearsExperience()} years of extensive experience in the tech industry. While being completely self-taught, my journey has taken me through diverse environments. From large financial institutions to nimble startups and innovative digital agencies. My versatile background has honed my ability to adapt to various project needs and deliver top-notch solutions.</p>
              <p>Throughout my career, I have had the privilege of working on a multitude of projects that span different sectors. My work with large financial institutions has instilled in me a keen eye for security and performance, ensuring that the applications I develop are both robust and reliable. On the other hand, my experience with startups and digital agencies has sharpened my skills in rapid development and creative problem-solving, allowing me to bring innovative ideas to life quickly and efficiently.</p>
            </div>
          </div>
        </div>
      </ContentContainer>
      <hr />
      <ContentContainer className="bg-white">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2>My toolkit</h2>
            <p>I&apos;ve had the opportunity to gain experience and knowledge with the following tools, languages, and frameworks.</p>
            <p>While I am a frontend developer first and foremost, I have had the opportunity to dive in to some backend development. Working with .NET Core web apps, and building frontend interfaces in Blazor. I have also built applications using PHP.</p>
            <p>
              <span>For a more detailed overview of my skills and experience, check out my </span>
              <Link href={LINKS.LINKEDIN}>LinkedIn</Link>
              <span> profile. Or </span>
              <Link href={'/contact'}>get in touch</Link>
              <span> and I will happily share my CV.</span> 
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div>
              {chips.map((item, i) => {
                return <Chip 
                  icon={item.icon}
                  key={i}
                  className="me-3 mb-3"
                >
                  {item.label}
                </Chip>
              })}              
            </div>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer className="bg-beige">
        <div className="row flex-row-reverse">

          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <h2>Who am I?</h2>
            <p>Originally from Northern Ireland, I&apos;ve spent the last 14 years living and working in the vibrant tech scene of Melbourne, Australia. Recently, I took the plunge and moved to Berlin, Germany, drawn by a long-standing fascination with the language and culture.</p>
            <p>When I&apos;m not immersed in code, I love staying active and fueling my passion for football. Fitness is a big part of my life, and you&apos;ll often find me exploring new ways to stay in shape. My wanderlust has taken me to 16 countries so far, and my travel bucket list keeps growing.</p>
            <p>
              <span>In my spare time, I&apos;m also the co-founder of a camping startup based in Sydney, Australia, where I channel my entrepreneurial spirit and love for the great outdoors. I&apos;m currently looking for freelance opportunities, so if you have a project in mind, </span>
              <Link href={'/contact'}>get in touch!</Link>
            </p>
          </div>
          <div className="col-12 col-lg-6 AboutMe__img-grid">
            <div>
              <Image src={'/images/tv-tower.jpg'}
                alt="Berlin TV Tower"
                width={600}
                height={600}
                className="img-fluid"
              />
            </div>
            <div>
            <Image src={'/images/brandenburg-gate.jpeg'}
                alt="Berlin TV Tower"
                width={600}
                height={600}
                className="img-fluid"
              />
            </div>
            <div>
            <Image src={'/images/me-forest.jpg'}
                alt="Berlin TV Tower"
                width={600}
                height={600}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}