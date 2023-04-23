import CustomHead from '@components/misc/CustomHead'
import Section from '@components/pages/about/Section'
import Timeline from '@components/pages/about/Timeline'
import Tools from '@components/pages/about/Tools'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />

      <div id="about-page" className="page-container my-10 sm:my-20 lg:my-48">
        <Section id="about-who" className="overflow-auto">
          <Section.Misc>
            <figure />
          </Section.Misc>

          <Section.Content>
            <Section.Title>Who am I</Section.Title>

            <Section.Paragraph>
              My name is Kamil and one of my main goals is to master front-end
              development because long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play guitar once in a while.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-why" className="mt-14 lg:mt-56">
          <Section.Misc>
            <figure />
          </Section.Misc>

          <Section.Content className="lg:order-first">
            <Section.Title>Why me</Section.Title>

            <Section.Paragraph>
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web. Currently, I&#39;m working on
              improving my problem-solving skills and I&#39;m exploring 3D
              stuff.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-what" className="mt-12 lg:mt-56">
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

        <Section id="about-timeline" className="mt-12 lg:mt-56">
          <Section.Content
            className="mt-12 lg:mt-0 grid items-center"
            variant="timeline"
          >
            <Section.Title className="xl:px-8 2xl:px-12">
              My experiences
            </Section.Title>

            <Timeline />
          </Section.Content>

          <Section.Misc className="order-first lg:order-last">
            <figure />
          </Section.Misc>
        </Section>
      </div>
    </>
  )
}

export default About
