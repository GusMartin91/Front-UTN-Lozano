import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="/assets/images/slide1.jpg"
          alt="slide1"
        />
        <Carousel.Caption>
          <h3>Transforma tu espacio de trabajo</h3>
          <p>
            Potencia tu oficina con soluciones personalizadas que impulsarán la
            creatividad y la productividad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="/assets/images/slide2.jpg"
          alt="slide2"
        />
        <Carousel.Caption>
          <h3>Expertos jóvenes y dinámicos</h3>
          <p>
            Nuestro equipo, compuesto por los mejores expertos jóvenes del país,
            está listo para llevar tu oficina al siguiente nivel.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="/assets/images/slide3.jpg"
          alt="slide3"
        />
        <Carousel.Caption>
          <h3>Innovación y frescura en cada proyecto</h3>
          <p>
            Somos el equipo perfecto para inyectar innovación y frescura a tu
            espacio de trabajo con aplicaciones ágiles y modernas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="/assets/images/slide4.jpg"
          alt="slide4"
        />
        <Carousel.Caption>
          <h3>Asesoramiento personalizado para tu oficina ideal</h3>
          <p>
            Te brindamos asesoramiento completo en desarrollo de software para
            crear la oficina ideal y moderna que siempre has deseado.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
