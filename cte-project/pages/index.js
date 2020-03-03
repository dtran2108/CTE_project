import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
    </Head>

    <main>
      <Header />
      <About />
    </main>

    <style jsx>{`
    `}</style>

  </div>
)

export default Home
