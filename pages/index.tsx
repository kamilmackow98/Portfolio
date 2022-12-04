import type { NextPage } from 'next'
import CustomHead from '@atoms/CustomHead'
import DiscoLink from '@atoms/DiscoLink'
import styles from '@styles/pages/Home.module.css'
import clsx from 'clsx'
import ResumeIcon from '@icons/ResumeIcon'
import DiscoCircles from '@atoms/DiscoCircles/DiscoCircles'

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />
      <div
        className={clsx(
          styles.container,
          'page-container',
          'grid lg:grid-cols-2',
        )}
        id="home-page"
      >
        <div className={clsx('flex flex-col', 'items-start')}>
          <h1
            className={clsx(
              'theme-font--heading font-extrabold',
              'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl 2xl:text-8xl',
              'leading-tight text-white',
            )}
          >
            I build unique experiences
          </h1>
          <p
            className={clsx(
              'font-medium leading-relaxed',
              'max-w-[400px] xl:max-w-[460px]',
              'mt-10',
            )}
            id="description"
          >
            I&#39;m a Web Developer with a passion for UI and UX. Mainly focused
            on front-end development, I like to design user interfaces, create
            stunning websites and develop cutting-edge applications.
          </p>

          <div
            className={clsx('flex items-center', 'mt-10')}
            id="home-buttons-wrapper"
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

          <div
            className={clsx(styles['resume-container'], 'mt-24')}
            id="resume-wrapper"
          >
            <a
              className={clsx('flex items-center', 'theme-font--heading')}
              href="/assets/pdf/Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ResumeIcon />
              <div className={clsx('flex flex-col', 'ml-6')}>
                <span
                  className={clsx(
                    'font-text--md font-bold',
                    'uppercase tracking-wide text-white',
                  )}
                >
                  My resume
                </span>
                <span className={clsx('font-text--sm font-medium')}>
                  Download
                </span>
              </div>
            </a>
          </div>
        </div>

        <div
          className={clsx(
            styles['circles-container'],
            'items-center justify-center lg:flex',
            'placeholder',
            'hidden',
          )}
        >
          <DiscoCircles />
        </div>
      </div>
    </>
  )
}

export default Home
