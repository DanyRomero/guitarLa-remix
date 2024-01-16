import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, precio, url, nombre } = guitarra;
  console.log();
  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>
        <Link to={`/guitarras/${url}`} className="enlace">
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
