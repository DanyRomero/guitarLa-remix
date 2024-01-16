import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import styles from "../styles/guitarras.css";

export function meta({ data }) {
  if (!data) {
    console.log('no data')
    return {
      title: `Guitarra no encontrada`,
      description: `Guitarra no encontrada`,
    };
  }
  return [
    {
      title: `GuitarLA - ${data[0].attributes.nombre}`,
      description: `Guitarra, ventas de guitarra ${data[0]?.attributes.nombre}`,
    },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const { url } = params;
  const guitarra = await getGuitarra(url);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra.data;
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra[0]?.attributes;
  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt="imagen de guitarra"
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion[0].children[0].text}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
