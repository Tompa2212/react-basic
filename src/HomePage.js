import React from "react";

import Testimonials from "./testimonials/Testimonials";
import Gallery from "./gallery/Gallery";
import Profiles from "./profiles/Profiles";

function HomePage() {
  return (
    <React.Fragment>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <Profiles></Profiles>
      <section class="cetiri">
        <div class="container">
          <div class="section-title">
            <h2 class="heading-2">ČETIRI</h2>
            <div class="underline"></div>
            <p>Finibus Bonorum</p>
          </div>

          <div class="text-center">
            <button class="btn">neki@mail.hr</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
