import React from "react";
import { Banner, Header, Slider, Footer } from "components";

export default function Main() {
  const sliders = () => {
    const keywords = ["지금 뜨는 콘텐츠!"];
    return keywords.map((keyword) => <Slider keyword={keyword} />);
  };

  return (
    <div>
      <Header />
      <main>
        <Banner />
        {sliders()}
      </main>
      <Footer />
    </div>
  );
}
