import type { NextPage } from 'next'
import CustomHead from '@atoms/CustomHead'

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />
      <div className="page-container">
        <div className="content">
          <h1>I build unique experiences</h1>
          <p>
            I&#39;m a Web Developer with a passion for UI and UX. Mainly focused
            on front-end development, I like to design user interfaces, create
            stunning websites and develop cutting-edge applications.
          </p>

          <div id="home-buttons-wrapper">
            <button>Check my work</button>
            <div>OR</div>
            <button>Learn about me</button>
          </div>

          <div id="resume-wrapper">

          </div>
        </div>

        <div className="placeholder">
          <div>Spinning circles.</div>
        </div>
      </div>
    </>
  )
}

export default Home
