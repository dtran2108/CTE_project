import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Course from '../components/FeaturedCourse/Course';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
    </Head>

    <main>
      <Header />
      <About />
      <Course />
    </main>

    <style jsx>{`
    `}</style>

  </div>
)

export default Home
