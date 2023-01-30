import Header from "@components/header/Header";
import Banner from "@components/banner/Banner";
import CardSlide from "@components/cardSlide/CardSlide";
import Footer from "@components/footer/Footer";
import LazyLoad from "react-lazyload";

const MainPage = ({ setSearchInput }) => {
  return (
    <>
      <Banner />
      <LazyLoad offset={100}>
        <CardSlide category={"액션"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"모험"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"애니메이션"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"SF"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"공포"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"코미디"} />
      </LazyLoad>
      <LazyLoad offset={100}>
        <CardSlide category={"음악"} />
      </LazyLoad>
      <Footer />
    </>
  );
};

export default MainPage;
