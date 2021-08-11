import "./gallery.css";
import house1 from "../img/house-2.jpeg";
import house2 from "../img/house-3.jpeg";
import house3 from "../img/house-4.jpeg";

function Gallery() {
  return (
    <section class="gallery">
      <div class="container">
        <div class="section-title">
          <h2 class="heading-2">DVA</h2>
          <div class="underline"></div>
        </div>

        <div class="gallery__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            incidunt sapiente mollitia quisquam asperiores, doloremque expedita
            voluptates eius nam! Assumenda pariatur molestiae quia facilis
            aperiam dolor, nam vero exercitationem eum doloremque molestias?
            Quia, autem maxime ab veritatis labore assumenda consectetur,
            possimus nostrum provident deleniti quos repellat ullam eaque,
            adipisci exercitationem.
          </p>
        </div>

        <div class="gallery__img-container text-center">
          <img src={house1} class="gallery__img" alt="House 1"></img>
          <img src={house2} class="gallery__img" alt="House 2"></img>
          <img src={house3} class="gallery__img" alt="House 3"></img>
        </div>

        <div class="section-title">
          <h2 class="heading-2">LOREM IPSUM</h2>
          <p>Finibus Bonorum</p>
        </div>

        <div class="text-center">
          <button class="btn">neki@mail.hr</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
