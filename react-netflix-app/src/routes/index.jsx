import Footer from '@components/common/footer';
import Header from '@components/common/header';
import Hero from '@components/home/hero';

const Home = () => (
  <>
    <Header />
    <Hero />
    {Array(50)
      .fill(0)
      .map((_, index) => (
        <p>{index}</p>
      ))}
    <Footer />
  </>
);

export default Home;
