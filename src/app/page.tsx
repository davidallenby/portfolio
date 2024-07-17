import SiteHeader from "@components/SiteHeader";
import './home/Home.scss';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="HomeHeroBanner contained gutter-x">
          <h1 className="mb-1">David Allenby</h1>
          <h2 className="subtitle mb-3">Lead frontend developer</h2>
          <p>
            <span>Hi, I&apos;m David. I&apos;m a lead frontend developer based in Berlin, Germany.</span>
            <br/>
            <span>I like making apps, and taking naps. &#128164;</span>
          </p>
        </section>
        <section className="bg-white">
          <div className="contained gutter-x">
            <h2>Projects</h2>
          </div>
        </section>
      </main>
    </>
  );
}
