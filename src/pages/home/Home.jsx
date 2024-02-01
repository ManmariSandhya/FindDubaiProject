import React from "react";

import { HomeSliderComponent } from "../../components/home-slider/home-slider.component";
import { HomeCards } from "../../components/card/card.component";
import { Popularcategories } from "../../components/categories/categories.component";
import { Footer } from "../../components/footer/footer.component";
import { HowitWorks } from "../../components/how_itworks/how_itworks.component";


const Home = () => {
  return (
    <div className="home-main-container">

      <HomeSliderComponent></HomeSliderComponent>
      <br></br><br></br>
      <Popularcategories></Popularcategories>
      <br></br> <br></br> <br></br><br></br><br></br>
      <HomeCards></HomeCards>
      <br></br><br></br>
      <HowitWorks></HowitWorks>
      <br></br><br></br>
      <Footer></Footer>

    </div>
  );
};

export default Home;
