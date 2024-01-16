import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "../components/listado-guitarras";
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlog from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";
import ListadoPosts from "../components/listado-posts";
import Curso from "../components/curso";

export function meta() {
  return [{}];
}

export function links() {
  return [
    { rel: "styleSheet", href: stylesGuitarras },
    { rel: "styleSheet", href: stylesBlog },
    { rel: "styleSheet", href: stylesCurso },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}

const Index = () => {
  const datos = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={datos.guitarras} />
      </main>
      <Curso curso={datos.curso.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={datos.posts} />
      </section>
    </>
  );
};

export default Index;
