import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido[0].children[0].text}</p>

        <Link className="enlace" to={`/posts/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
}
