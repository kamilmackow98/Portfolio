import CustomHead from '@components/misc/CustomHead'
import DiscoCircles from '@components/pages/home/DiscoCircles'
import HomeButtons from '@components/pages/home/HomeButtons'
import HomeDescription from '@components/pages/home/HomeDescription'
import Resume from '@components/pages/home/Resume'
import { cx } from 'class-variance-authority'
import { NextPage } from 'next'

const pageClasses = cx('page-container my-10 sm:my-20 lg:my-32')

const Title = () => <h1>I build unique experiences</h1>

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home" />

      <div id="home-page" className={pageClasses}>
        <div>
          <Title />
          <HomeDescription />
          <HomeButtons />
          <Resume />
        </div>

        <DiscoCircles />
      </div>
    </>
  )
}

export default Home
