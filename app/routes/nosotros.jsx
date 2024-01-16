import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";
export function meta() {
  return [
    {
      title: "GuitarLA - Sobre nosotros",
      description: "venta de guitarras, blog de música",
    },
  ];
}
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: imagen, as: "image" },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenido nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Cras placerat orci nec dui congue tempor. Donec tempus, felis at
            porttitor ultrices, urna augue placerat massa, ac congue magna arcu
            non eros. Aenean cursus, mi non dignissim pulvinar, eros magna
            ornare nunc, non consectetur quam leo id velit. Nam ornare eros
            quam, ac elementum ligula condimentum ac. Mauris orci mauris, tempor
            a sodales vitae, elementum sit amet felis. In eget augue vel turpis
            fringilla sollicitudin. Nulla facilisi. Praesent gravida semper
            augue, id dignissim mi sodales eget.
          </p>
          <p>
            Praesent gravida semper
            augue, id dignissim mi sodales eget. Donec vulputate, velit in
            posuere luctus, nunc leo venenatis nunc, nec varius massa massa quis
            mauris. Aenean sagittis dui dui, eget imperdiet nisl commodo
            porttitor. Nunc enim ligula, eleifend sit amet quam vel, pulvinar
            placerat ligula. Mauris convallis ipsum in ligula cursus efficitur.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
