import Footer from '@components/common/Footer';
import Header from '@components/common/Header';

const Home = () => (
  <>
    <Header />
    {Array(50)
      .fill(0)
      .map((_, index) => (
        <p>{index}</p>
      ))}
    <Footer />
  </>
);

export default Home;
