import Banner from "@components/banner/Banner";
import CardSlide from "@components/cardSlide/CardSlide";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <CardSlide title={"액션"} genreId={28} />
      <CardSlide title={"가족"} genreId={10751} />
      <CardSlide title={"애니메이션"} genreId={16} />
      <CardSlide title={"공포"} genreId={27} />

      <Footer />
    </>
  );
};

export default App;
