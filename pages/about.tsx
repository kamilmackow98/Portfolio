import CustomHead from '@atoms/CustomHead'
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
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
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
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
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
          <Image
            className="order-first lg:order-last"
            src="/assets/images/laptop.svg"
            alt="Why me section - tech"
            height={340}
            width={540}
            priority
          />
          <div className="content mt-12 lg:mt-0">
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
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
          <h2>My experiences</h2>
          <div>Timeline</div>
        </section>
      </div>
    </>
  )
}

export default About
