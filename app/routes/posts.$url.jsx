import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";

export function meta({ data }) {
  if (!data) {
    console.log("no data");
    return {
      title: `Blog no encontrado`,
      description: `Blog no encontrado`,
    };
  }
  return [
    {
      title: `GuitarLA - ${data[0].attributes.titulo}`,
      description: `Guitarra, ventas de guitarra ${data[0]?.attributes.titulo}`,
    },
  ];
}

export async function loader({ params }) {
  const { url } = params;
  const guitarra = await getPost(url);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Blog no encontrado",
    });
  }
  return guitarra.data;
}

export default function DetailPost() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido[0].children[0].text}</p>
        <p className="texto">{contenido[2].children[0].text}</p>
      </div>
    </article>
  );
}
