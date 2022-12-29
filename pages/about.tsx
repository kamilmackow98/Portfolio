import CustomHead from '@components/misc/CustomHead'
import Section from '@components/pages/about/Section'
import Timeline from '@components/pages/about/Timeline'
import Tools from '@components/pages/about/Tools'
import { getEvents } from '@utils/events'
import { NextPage } from 'next'
import Image from 'next/image'

// const isOpenForOpp = process.env.isOpenForOpp === 'yes'

const About: NextPage = () => {
  const events = getEvents()

  return (
    <>
      <CustomHead title="About" />

      <div id="about-page" className="page-container lg:mb-24">
        <Section id="about-who" className="lg:mt-16">
          <Image
            src="/assets/images/manypixels/html.svg"
            alt="Who am I section, laptop illustration"
            height={280}
            width={480}
            priority
          />

          <Section.Content>
            <Section.Title>Who am I</Section.Title>
            <Section.Paragraph>
              I&#39;m a Junior Web Developer and my goal is to master front-end
              development because, long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play the guitar once in a while.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-why" className="mt-14 lg:mt-48">
          <Image
            className="lg:order-last"
            src="/assets/images/manypixels/designer.svg"
            alt="Why me section, list of tools, icons"
            height={300}
            width={480}
            priority
          />

          <Section.Content className="lg:order-first">
            <Section.Title>Why me</Section.Title>
            <Section.Paragraph>
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web.
            </Section.Paragraph>
            <Section.Paragraph className="mt-2">
              Currently, I&#39;m working on improving my problem-solving skills
              and exploring 3D stuff and animations.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-what" className="mt-12 lg:mt-48">
          <Tools />

          <Section.Content>
            <Section.Title>What I use</Section.Title>
            <Section.Paragraph>
              I use a set of modern tools that help me develop better and more
              secure apps. I choose libraries and frameworks that solve existing
              problems faster and more efficiently, but also provide a great
              developer experience overall.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-timeline" className="mt-16 lg:mt-48" align="top">
          <Section.Content variant="timeline" className="grid items-center">
            <Section.Title className="xl:px-8 2xl:px-12">
              My experiences
            </Section.Title>
            <Timeline events={events} />
          </Section.Content>

          <div className="hidden justify-center lg:flex">
            <Image
              src="/assets/images/manypixels/startup.svg"
              alt="Timeline section, rocket illustration"
              height={360}
              width={420}
            />
          </div>
        </Section>
      </div>
    </>
  )
}

export default About
