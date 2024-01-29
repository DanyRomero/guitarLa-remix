
import { Outlet, useOutletContext } from "@remix-run/react";
import stylesGuitarras from "../styles/guitarras.css";



export function links() {
  return [{ rel: "styleSheet", href: stylesGuitarras }];
}



const Tienda = () => {


  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()}/>
    </main>
  );
};

export default Tienda;
