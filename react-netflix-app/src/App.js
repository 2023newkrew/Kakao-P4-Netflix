import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardSlide from "./components/CardSlide/CardSlide";
import Footer from "./components/Footer/Footer";

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
