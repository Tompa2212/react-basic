import "./testimonials.css";
import people from "../Data";

function Testimonials() {
  return (
    <section class="testimonials text-center">
      <div class="container">
        <div class="section-title">
          <h2 class="heading-2">JEDAN</h2>
          <div class="underline"></div>
          <p>Finibus Bonorum</p>
        </div>
        {people.map((person) => {
          return (
            <div class="story">
              <div class="for-order">
                <div class="story__shape">
                  <div class="story__caption">Caption</div>
                </div>
              </div>
              <div class="story__text">
                <h3 class="heading-3">{person.title}</h3>
                <p>{person.text}</p>
              </div>
            </div>
          );
        })}
        <button class="btn">neki@mail.hr</button>
      </div>
    </section>
  );
}

export default Testimonials;
