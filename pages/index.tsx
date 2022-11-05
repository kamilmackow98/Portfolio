import type { NextPage } from 'next'
import CustomHead from '@atoms/CustomHead'
import DiscoLink from '@atoms/DiscoLink'

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />
      <div id="home-page" className="page-container">
        <div className="content">
          <h1 className="theme-font--heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-tight text-white">
            I build unique experiences
          </h1>
          <p id="description" className="mt-10 font-medium leading-relaxed">
            I&#39;m a Web Developer with a passion for UI and UX. Mainly focused
            on front-end development, I like to design user interfaces, create
            stunning websites and develop cutting-edge applications.
          </p>

          <div id="home-buttons-wrapper" className="flex items-center mt-10">
            <DiscoLink className="px-6 py-4" href="/portfolio">
              Check my work
            </DiscoLink>
            <div className="mx-6 theme-font--heading font-text--md font-bold text-white">
              OR
            </div>
            <DiscoLink
              className="px-6 py-4"
              variant="blue"
              href="/about"
              backwards
            >
              Learn about me
            </DiscoLink>
          </div>

          <div id="resume-wrapper" className="mt-24">
            Resume
          </div>
        </div>

        <div className="placeholder hidden lg:flex items-center justify-center">
          <div>Spinning circles.</div>
        </div>
      </div>
    </>
  )
}

export default Home
