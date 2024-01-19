import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import { useState } from "react";

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
  const [cantidad,setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra[0]?.attributes;
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt="imagen de guitarra"
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion[0].children[0].text}</p>
        <p className="precio">{precio}</p>

        <form className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            id="cantidad"
            onChange={e => setCantidad(+e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value={"Agregar al carrito"} /> 
         
        </form>
      </div>
    </div>
  );
};

export default Guitarra;
