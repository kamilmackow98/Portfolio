import CustomHead from '@atoms/CustomHead'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <div className="page-container">
        <section id="about-who">
          <div className="placeholder" />
          <div className="content">
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
              Who am I
            </h2>
            <p className="font-medium leading-relaxed">
              I&#39;m a Junior Web Developer and my goal is to master front-end
              development because, long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play the guitar once in a while.
            </p>
          </div>
        </section>

        <section id="about-why">
          <div className="placeholder" />
          <div className="content">
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
              Why me
            </h2>
            <p className="font-medium leading-relaxed">
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web.
            </p>
            <p>
              Currently, I&#39;m working on improving my problem-solving skills
              and exploring 3D stuff and animations.
            </p>
          </div>
        </section>

        <section id="about-what">
          <div className="placeholder" />
          <div className="content">
            <h2 className="text-white theme-font--heading font-extrabold font-text--fat tracking-wide">
              What I use
            </h2>
            <p className="font-medium leading-relaxed">
              I use a set of modern tools that help me develop better and more
              secure apps. I choose libraries and frameworks that solve existing
              problems faster and more efficiently, but also provide a great
              developer experience overall.
            </p>
          </div>
        </section>

        <div id="about-timeline">
          <h2>My experiences</h2>
          <div>Timeline</div>
        </div>
      </div>
    </>
  )
}

export default About
