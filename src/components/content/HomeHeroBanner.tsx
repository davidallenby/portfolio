import ContentContainer from '@components/layout/ContentContainer/ContentContainer'
import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'

export default function HomeHeroBanner() {
  return (
    <ContentContainer className='py-36 bg-off-white'>
      <h1 className='mb-1'>David Allenby</h1>
      <h2 className='subtitle text-base mb-3'>Lead frontend developer</h2>
      <p>
        <span>Hi, I&apos;m David. I&apos;m a lead frontend developer.</span>
        <br />
        <span>I like making apps, and taking naps.</span>
      </p>
      <ExternalIcons />
    </ContentContainer>
  )
}
