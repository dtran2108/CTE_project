import Head from 'next/head';
import Header from '../components/Header/Header';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <main>
      <Header />
    </main>

    <style jsx>{`
      // .container {
      //   min-height: 100vh;
      //   padding: 0 0.5rem;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      //   align-items: center;
      // }

    `}</style>

  </div>
)

export default Home
