import DiscoLink from '@atoms/DiscoLink'
import CustomHead from '@components/misc/CustomHead'
import DiscoCircles from '@components/pages/home/DiscoCircles'
import ResumeIcon from '@components/pages/home/ResumeIcon'
import { cx } from 'class-variance-authority'
import { NextPage } from 'next'
import { ComponentPropsWithoutRef } from 'react'

const pageContainerClasses = cx(
  'grid lg:grid-cols-2',
  'my-20 lg:my-32',
  'page-container',
  'relative',
)

const titleClasses = cx(
  'theme-font--heading font-extrabold leading-tight text-white',
  'lg:text-7xl xl:text-7.5xl 2xl:text-8xl',
  'text-4xl sm:text-5xl md:text-6xl',
)

const descriptionClasses = cx(
  'font-medium leading-relaxed',
  'max-w-[400px] xl:max-w-[460px]',
  'mt-10',
)

const myResumeClasses = cx(
  'uppercase tracking-wide text-white',
  'font-text--md font-bold',
)

const orClasses = cx(
  'theme-font--heading font-text--md font-bold',
  'text-white',
  'mx-6',
)

interface ResumeWrapperProps extends ComponentPropsWithoutRef<'a'> {}

const ResumeWrapper = (props: ResumeWrapperProps) => {
  const { children, ...rest } = props

  return (
    <a
      className="theme-font--heading flex items-center"
      href="/assets/pdf/Resume.pdf"
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />

      <div id="home-page" className={pageContainerClasses}>
        <div className="flex flex-col items-start">
          <h1 className={titleClasses}>I build unique experiences</h1>

          <p id="description" className={descriptionClasses}>
            I&#39;m a Web Developer with a passion for UI and UX. Mainly focused
            on front-end development, I like to design user interfaces, create
            stunning websites and develop cutting-edge applications.
          </p>

          <div className="mt-10 flex items-center" id="home-buttons-wrapper">
            <DiscoLink size="md" href="/portfolio">
              Check my work
            </DiscoLink>

            <div className={orClasses}>OR</div>

            <DiscoLink variant="blue" size="md" href="/about" backwards>
              Learn about me
            </DiscoLink>
          </div>

          <div id="resume" className="mt-24">
            <ResumeWrapper>
              <ResumeIcon />
              <div className="ml-6 flex flex-col">
                <span className={myResumeClasses}>My resume</span>
                <span className="font-text--sm font-medium">Download</span>
              </div>
            </ResumeWrapper>
          </div>
        </div>

        <DiscoCircles />
      </div>
    </>
  )
}

export default Home
