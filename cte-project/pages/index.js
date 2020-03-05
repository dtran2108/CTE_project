import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Course from '../components/FeaturedCourse/Course';
import OurAdvantages from '../components/OurAdvantages/OurAdvantages';
import Reward from '../components/Reward/Reward';
import Footer from '../components/Footer/Footer';

const Home = () => (
  <div className="container">
    <Head>
      <title>CTE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="MDB-Free_4.14.0/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="MDB-Free_4.14.0/css/mdb.min.css"/>
      <link rel="stylesheet" href="MDB-Free_4.14.0/css/style.css"/>
    </Head>

    <main>
      <Header />
      <About />
      <Course />
      <OurAdvantages />
      <Reward />
      <Footer />
    </main>

    <style jsx>{`
    `}</style>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/popper.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/mdb.min.js"></script>
  </div>
)

export default Home
