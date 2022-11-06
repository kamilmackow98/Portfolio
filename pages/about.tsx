import CustomHead from '@atoms/CustomHead'
import TechUsed from '@molecules/TechUsed'
import Timeline from '@molecules/Timeline/Timeline'
import { NextPage } from 'next'
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <div id="about-page" className="page-container">
        <section
          className="grid lg:grid-cols-2 items-center justify-center"
          id="about-who"
        >
          <Image
            src="/assets/images/laptop.svg"
            alt="Who am I section - laptop"
            height={320}
            width={540}
            priority
          />
          <div className="content mt-12 lg:mt-0">
            <h2 className="text-white theme-font--heading font-bold font-text--fat tracking-wide">
              Who am I
            </h2>
            <p className="mt-3 lg:px-8 font-medium leading-relaxed text-justify">
              I&#39;m a Junior Web Developer and my goal is to master front-end
              development because, long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play the guitar once in a while.
            </p>
          </div>
        </section>

        <section
          className="mt-24 grid lg:grid-cols-2 items-center justify-center"
          id="about-why"
        >
          <div className="content mt-12 lg:mt-0 order-last lg:order-first">
            <h2 className="text-white theme-font--heading font-bold font-text--fat tracking-wide">
              Why me
            </h2>
            <p className="mt-3 lg:px-8 font-medium leading-relaxed text-justify">
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web.
            </p>
            <p className="mt-3 lg:px-8 font-medium leading-relaxed text-justify">
              Currently, I&#39;m working on improving my problem-solving skills
              and exploring 3D stuff and animations.
            </p>
          </div>
          <Image
            className="order-first lg:order-last"
            src="/assets/images/tech.svg"
            alt="Why me section - tech"
            height={340}
            width={540}
            priority
          />
        </section>

        <section
          className="mt-24 grid lg:grid-cols-2 items-center justify-center"
          id="about-what"
        >
          <TechUsed />
          <div className="content mt-12 lg:mt-0">
            <h2 className="text-white theme-font--heading font-bold font-text--fat tracking-wide">
              What I use
            </h2>
            <p className="mt-3 lg:px-8 font-medium leading-relaxed text-justify">
              I use a set of modern tools that help me develop better and more
              secure apps. I choose libraries and frameworks that solve existing
              problems faster and more efficiently, but also provide a great
              developer experience overall.
            </p>
          </div>
        </section>

        <section
          className="mt-24 flex justify-center items-center flex-col"
          id="about-timeline"
        >
          <h2 className="text-white theme-font--heading font-bold font-text--fat tracking-wide">
            My experiences
          </h2>
          <Timeline events={events} />
        </section>
      </div>
    </>
  )
}

const events = [
  {
    id: '89528086-0e9b-4500-864b-86c67a4d0661',
    title: "DUT Informatique [Associate's Degree]",
    description: ['University Institute of Technology in Metz'],
    dates: ['2017', '2019'],
  },
  {
    id: '263fd381-7fca-432e-9bb1-557766a0032d',
    title: 'Internship at 3d2lux',
    description: ['Web development', 'JavaScript, PHP and WordPress'],
    dates: ['04/2019', '06/2019'],
  },
  {
    id: 'ee66c0e9-a7ca-4bdb-a7f0-07c38e40a38d',
    title: 'Vocational Degree in Web Development',
    description: ['University Institute of Technology in Metz'],
    dates: ['2020', '2021'],
  },
  {
    id: 'a4e33884-f614-4799-9aa3-cf21c335df4a',
    title: 'Internship at Dingiso',
    description: [
      'Web development with Symfony',
      'Mobile development with React Native',
    ],
    dates: ['04/2021', '08/2021'],
  },
  {
    id: 'af2dd644-359a-4693-8640-32501871ad68',
    title: 'Web Developer at Dingiso',
    description: ['Web development', 'JavaScript, PHP, WordPress and Symfony'],
    dates: ['09/2021', '11/2021'],
  },
]

export default About
