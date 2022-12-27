import CustomHead from '@atoms/CustomHead'
import TechUsed from '@molecules/TechUsed'
import Timeline from '@molecules/Timeline/Timeline'
import { NextPage } from 'next'
import Image from 'next/image'
import clsx from 'clsx'
import styles from '@styles/pages/About.module.css'

const isOpenForOpp = process.env.isOpenForOpp === 'yes'

const About: NextPage = () => {
  // const renderCurrentState = isOpenForOpp ? (
  //   <CurrentEvent
  //     className={clsx(
  //       'flex flex-col items-center',
  //       'mt-4 px-6 py-4 lg:px-8 lg:py-5',
  //     )}
  //     event={data.events[0]}
  //   />
  // ) : (
  //   <div className="flex flex-col items-center">
  //     <h3
  //       className={clsx(
  //         'theme-font--heading font-bold',
  //         'tracking-wide text-white',
  //       )}
  //     >
  //       Your company?
  //     </h3>
  //     <DiscoLink href="/contact" className="mt-6 px-6 py-3">
  //       Hire me
  //     </DiscoLink>
  //   </div>
  // )

  return (
    <>
      <CustomHead title="About" />
      <div id="about-page" className="page-container">
        <section id={styles.who} className={'grid items-center justify-center'}>
          <Image
            src="/assets/images/manypixels/html.svg"
            alt="Who am I section - laptop"
            height={280}
            width={480}
            priority
          />
          <div className="content mt-12 lg:mt-0 xl:px-8 2xl:px-12">
            <h2
              className={clsx(
                'theme-font--heading font-text--fat font-bold',
                'tracking-wide text-white',
              )}
            >
              Who am I
            </h2>
            <p
              className={clsx(
                'text-justify font-medium leading-relaxed',
                'mt-3 lg:px-8',
              )}
            >
              I&#39;m a Junior Web Developer and my goal is to master front-end
              development because, long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play the guitar once in a while.
            </p>
          </div>
        </section>

        <section
          id={styles.why}
          className={clsx('grid items-center justify-center', 'mt-14 lg:mt-32')}
        >
          <div
            className={clsx(
              'content',
              'order-last lg:order-first',
              'mt-12 lg:mt-0 xl:px-8 2xl:px-12',
            )}
          >
            <h2
              className={clsx(
                'theme-font--heading font-text--fat font-bold',
                'tracking-wide text-white',
              )}
            >
              Why me
            </h2>
            <p
              className={clsx(
                'text-justify font-medium leading-relaxed',
                'mt-3 lg:px-8',
              )}
            >
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web.
            </p>
            <p
              className={clsx(
                'text-justify font-medium leading-relaxed',
                'mt-3 lg:px-8',
              )}
            >
              Currently, I&#39;m working on improving my problem-solving skills
              and exploring 3D stuff and animations.
            </p>
          </div>
          <Image
            className="order-first lg:order-last"
            src="/assets/images/manypixels/designer.svg"
            alt="Why me section - tech"
            height={300}
            width={480}
            priority
          />
        </section>

        <section
          id={styles.what}
          className={clsx('grid items-center justify-center', 'mt-12 lg:mt-32')}
        >
          <TechUsed />
          <div className="content mt-12 lg:mt-0 xl:px-8 2xl:px-12">
            <h2
              className={clsx(
                'theme-font--heading font-text--fat font-bold',
                'tracking-wide text-white',
              )}
            >
              What I use
            </h2>
            <p
              className={clsx(
                'text-justify font-medium leading-relaxed',
                'mt-3 lg:px-8',
              )}
            >
              I use a set of modern tools that help me develop better and more
              secure apps. I choose libraries and frameworks that solve existing
              problems faster and more efficiently, but also provide a great
              developer experience overall.
            </p>
          </div>
        </section>

        <section
          id={styles.timeline}
          className={clsx(
            'flex flex-col',
            'items-start justify-center',
            'mt-16 lg:mt-40',
          )}
        >
          <h2
            className={clsx(
              'theme-font--heading font-text--fat font-bold',
              'tracking-wide text-white',
              'xl:px-8 2xl:px-12',
            )}
          >
            My experiences
          </h2>
          <div className={clsx('grid items-center', 'w-full', 'mt-4')}>
            <Timeline events={data.events} />
            <div className={clsx('hidden lg:flex', 'justify-center')}>
              <Image
                src="/assets/images/manypixels/startup.svg"
                alt="Timeline rocket"
                height={320}
                width={420}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const data = {
  events: [
    {
      id: '89528086-0e9b-4500-864b-86c67a4d0661',
      title: "DUT Informatique [Associate's Degree]",
      description: ['University Institute of Technology in Metz'],
      dates: ['2017', '2019'],
      eventDate: '2017',
    },
    {
      id: '263fd381-7fca-432e-9bb1-557766a0032d',
      title: 'Internship at 3d2lux',
      description: ['Web development', 'JavaScript, PHP and WordPress'],
      dates: ['04/2019', '06/2019'],
      eventDate: '2019',
    },
    {
      id: 'ee66c0e9-a7ca-4bdb-a7f0-07c38e40a38d',
      title: 'Vocational Degree in Web Development',
      description: ['University Institute of Technology in Metz'],
      dates: ['2020', '2021'],
      eventDate: '2020',
    },
    {
      id: 'a4e33884-f614-4799-9aa3-cf21c335df4a',
      title: 'Internship at Dingiso',
      description: [
        'Web development with Symfony',
        'Mobile development with React Native',
      ],
      dates: ['04/2021', '08/2021'],
      eventDate: '2021',
    },
    {
      id: 'af2dd644-359a-4693-8640-32501871ad68',
      title: 'Web Developer at Dingiso',
      description: [
        'Web development',
        'JavaScript, PHP, WordPress and Symfony',
      ],
      dates: ['09/2021', '11/2021'],
      eventDate: 'Now',
    },
  ],
}

export default About
