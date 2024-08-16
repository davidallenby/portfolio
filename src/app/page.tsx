import './page.scss';
import ExternalIcons from "@components/ui/ExternalIcons/ExternalIcons";
import ContentContainer from "@components/layout/ContentContainer/ContentContainer";
import { getYearsExperience } from "../helpers/common";
import Link from "next/link";
import { LINKS } from "@constants/links";
import Image from "next/image";
import OILogo from '@svg/openinvest-logo.svg';
import FeaturedArticles from '../components/ui/FeaturedArticles/FeaturedArticles';
import SiteLogo from '@components/ui/SiteLogo/SiteLogo';
import SiteLayout from '@components/layout/SiteLayout/SiteLayout';
import { BsGithub } from 'react-icons/bs';
import { BlogPost } from '@interfaces/blog.interfaces';

export default async function Home() {
  // Get the items from the server
  const items: BlogPost[] = [];

  return (    
    <SiteLayout>
      <ContentContainer className="HomeHeroBanner">
        <h1 className="mb-1">David Allenby</h1>
        <h2 className="subtitle text-base mb-3">Lead frontend developer</h2>
        <p>
          <span>Hi, I&apos;m David. I&apos;m a lead frontend developer based in Berlin, Germany.</span>
          <br/>
          <span>I like making apps, and taking naps.</span>
        </p>
        <ExternalIcons />
      </ContentContainer>

      <hr />

      <ContentContainer className="">
        <h2 className="mb-4">Featured projects</h2>
        <div className="FeaturedProjects__wrapper mb-5">
          <Link href={`https://camplete.com.au`} 
            target='_blank'
            className="FeaturedProject mb-4 mb-md-0 border"
          >
            <video 
              controls={false} 
              autoPlay={true} 
              loop 
              playsInline 
              className='w-100 h-100' 
              style={{ objectFit: 'cover', position: 'absolute', display: 'block' }}
            >
              <source src="/video/camplete-logo.webm" type="video/webm" />
            </video>
            <span className='FeaturedProject__info'></span>
          </Link>

          <Link href={'https://openinvest.com.au'} 
            target='_blank'
            className="FeaturedProject mb-4 mb-md-0 border"
          >
            <OILogo />
            <span className='FeaturedProject__info'></span>
          </Link>
          <Link href={'https://davidallenby.com'}
            target='_blank'
            className="d-flex flex-column justify-content-center align-items-center FeaturedProject bg-primary mb-4 mb-md-0 border"
          >
            <span className='d-flex align-items-center'>
              <SiteLogo isLink={false}
                colorInverted
                className='me-3'
              />
              <p className='h3 mb-0 text-primary-100'>David Allenby</p>
            </span>
            <span className='FeaturedProject__info'></span>
          </Link>
        </div>
        <div className='text-center'>
          <Link href={LINKS.GITHUB}
            className='btn btn-outline-primary d-inline-flex align-items-center'
          >
            <BsGithub className='me-2' />
            <span>View GitHub</span>
          </Link>
        </div>
      </ContentContainer>

      <hr />

      <ContentContainer className="bg-white">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0">
            <div>
              <h2>About me</h2>
              <p>With around {getYearsExperience()} years experience in software development I have a wealth of experience dealing with complex problems and implementing solutions. I&apos;m a frontend engineer first and foremost, however I do have experience with building backend systems, UX design, and an understanding of CI/CD pipelines.</p>
              <p className="mb-5">
                <span>If you&apos;d like to know more, check out the </span>
                <Link href={`/about`}>about page</Link>
                <span>, or visit my </span>
                <a href={LINKS.LINKEDIN} target="_blank">LinkedIn</a>
                <span> for more details about my experience.</span>
              </p>
              <Link href={`/about`} className="btn btn-outline-primary">Learn more</Link>              
            </div>
          </div>
          <div className="AboutMe__image col-12 col-lg-6">
            <Image 
              className="img-fluid"
              src={`/images/me-alligator-gorge.jpg`} 
              alt="Me hiking through alligator gorge" 
              width={1024}
              height={576}
            />
          </div>
        </div>
      </ContentContainer>
      
      <ContentContainer className="bg-beige">
        <FeaturedArticles items={items} />
      </ContentContainer>
    </SiteLayout> 
  );
}
