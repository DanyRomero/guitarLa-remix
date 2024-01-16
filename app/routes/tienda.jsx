import Guitarra from "../components/guitarra";
import { getGuitarras } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import  styles from "../styles/guitarras.css";

export function meta(){
  return[{title:'GuitarLA - Tienda de guitarras', description: 'GuitarLa nuestra colección de guitarras'}]
}

export function links() {
  return [{ rel: 'styleSheet', href: styles }];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  console.log({ guitarras });
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra colección</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => {
            return (
              <Guitarra
                key={guitarra?.attributes?.url}
                guitarra={guitarra?.attributes}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Tienda;
