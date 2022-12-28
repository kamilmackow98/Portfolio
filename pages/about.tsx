import CustomHead from '@atoms/CustomHead'
import Tools from '@components/pages/about/Tools'
import Timeline from '@components/pages/about/Timeline'
import { NextPage } from 'next'
import Image from 'next/image'
import clsx from 'clsx'

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
        <section id="about-who" className={'grid items-center justify-center'}>
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
          id="about-why"
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
          id="about-what"
          className={clsx('grid items-center justify-center', 'mt-12 lg:mt-32')}
        >
          <Tools />
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
          id="about-timeline"
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
      title: "Associate's Degree",
      description: [
        'My very first contact with coding and programming. During these 2 years at University Institute of Technology in Metz, I learned the basics and advanced concepts of algorithms, databases, networks and eventually Web development. I also discovered many programming languages like C, Java, PHP or JavaScript to name a few.',
      ],
      dates: ['2017', '2019'],
      eventDate: '2017',
    },
    {
      id: '263fd381-7fca-432e-9bb1-557766a0032d',
      title: 'Internship at 3d2lux',
      description: [
        'First internship where my studies could finally have been put into practice. I was mostly working with JavaScript and PHP on the main project of my internship. In the meantime, I was maintaining a website powered by WordPress. I learned a lot and the whole experience just made me want to dive even deeper into the Web.',
      ],
      dates: ['04/2019', '06/2019'],
      eventDate: '2019',
    },
    {
      id: 'ee66c0e9-a7ca-4bdb-a7f0-07c38e40a38d',
      title: 'Vocational Degree',
      description: [
        'Back at the same university in Metz, I started discovering popular tools and technologies that help build websites and mobile apps. The course was focusing more on practical stuff rather than theory. I was able to participate in plenty of group projects and build interesting applications with Vue, React or Symfony among others.',
      ],
      dates: ['2020', '2021'],
      eventDate: '2020',
    },
    {
      id: 'a4e33884-f614-4799-9aa3-cf21c335df4a',
      title: 'Web Developer at Dingiso',
      description: [
        'One more internship during which I was responsible for the development of a mobile app in React Native and a back-office in Symfony. After the internship, I continued working at Dingiso for yet another 2 months in order to finish both projects and helped maintain WordPress websites.',
      ],
      dates: ['04/2021', '08/2021'],
      eventDate: '2021',
    },
    {
      id: 'af2dd644-359a-4693-8640-32501871ad68',
      title: 'Web Consultant at Bloomind',
      description: [
        "Not a career path I anticipated, but it turned out to be a significant decision so far. As an entry job, it's an amazing opportunity to be able to work for different clients, with smaller or larger teams and older or modern codebases. There is always something new to learn pretty much everyday.",
      ],
      dates: ['2022', 'Today'],
      eventDate: 'Now',
    },
  ],
}

export default About
