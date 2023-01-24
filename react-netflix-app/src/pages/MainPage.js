import Header from "@components/header/Header";
import Banner from "@components/banner/Banner";
import CardSlide from "@components/cardSlide/CardSlide";
import Footer from "@components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <CardSlide category={"액션"} />
      <CardSlide category={"모험"} />
      <CardSlide category={"애니메이션"} />
      <CardSlide category={"SF"} />
      <CardSlide category={"공포"} />
      <CardSlide category={"코미디"} />
      <CardSlide category={"음악"} />
      <Footer />
    </>
  );
};

export default MainPage;
