import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Course from '../components/FeaturedCourse/Course';
import OurAdvantages from '../components/OurAdvantages/OurAdvantages';
import Reward from '../components/Reward/Reward';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <main>
      <Header />
      <About />
      <Course />
      <OurAdvantages />
      <Reward />
    </main>

    <style jsx>{`
    `}</style>

  </div>
)

export default Home
