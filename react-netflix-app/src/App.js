import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import CardSlide from "./components/cardSlide/CardSlide";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <CardSlide title={"액션"} />
      <CardSlide title={"모험"} />
      <CardSlide title={"애니메이션"} />
      <CardSlide title={"SF"} />
      <CardSlide title={"공포"} />
      <CardSlide title={"코미디"} />
      <CardSlide title={"음악"} />
      <Footer />
    </>
  );
};

export default App;
