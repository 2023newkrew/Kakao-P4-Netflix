import Banner from "./components/Banner/Banner";
import CardSlide from "./components/CardSlide/CardSlide";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CardSlide />
      <CardSlide />
      <CardSlide />
      <Footer />
    </div>
  );
};

export default App;
