import Guitarra from "../components/guitarra";
import { getGuitarras } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import stylesGuitarras from "../styles/guitarras.css";
import ListadoGuitarras from "../components/listado-guitarras";

export function meta() {
  return [
    {
      title: "GuitarLA - Tienda de guitarras",
      description: "GuitarLa nuestra colección de guitarras",
    },
  ];
}

export function links() {
  return [{ rel: "styleSheet", href: stylesGuitarras }];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  );
};

export default Tienda;
