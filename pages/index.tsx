import type { NextPage } from 'next'
import CustomHead from '@atoms/CustomHead'
import DiscoLink from '@atoms/DiscoLink'
import styles from '@styles/pages/Home.module.css'
import clsx from 'clsx'

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />
      <div id="home-page" className={clsx(styles.container, 'page-container')}>
        <div className="content">
          <h1
            className={clsx(
              'theme-font--heading font-extrabold',
              'text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl',
              'leading-tight text-white',
            )}
          >
            I build unique experiences
          </h1>
          <p
            id="description"
            className={clsx('font-medium leading-relaxed', 'mt-10')}
          >
            I&#39;m a Web Developer with a passion for UI and UX. Mainly focused
            on front-end development, I like to design user interfaces, create
            stunning websites and develop cutting-edge applications.
          </p>

          <div
            id="home-buttons-wrapper"
            className={clsx('flex items-center', 'mt-10')}
          >
            <DiscoLink className="px-6 py-4" href="/portfolio">
              Check my work
            </DiscoLink>
            <div
              className={clsx(
                'theme-font--heading font-text--md font-bold',
                'text-white',
                'mx-6',
              )}
            >
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

        <div
          className={clsx(
            'placeholder',
            'hidden',
            'items-center justify-center lg:flex',
          )}
        >
          <div>Spinning circles.</div>
        </div>
      </div>
    </>
  )
}

export default Home
