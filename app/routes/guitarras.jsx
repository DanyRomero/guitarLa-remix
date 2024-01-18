
import { Outlet } from "@remix-run/react";
import stylesGuitarras from "../styles/guitarras.css";



export function links() {
  return [{ rel: "styleSheet", href: stylesGuitarras }];
}



const Tienda = () => {
  

  return (
    <main className="contenedor">
      <Outlet />
    </main>
  );
};

export default Tienda;
