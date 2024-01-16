import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";


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

export default function DetailPost(){
  const post = useLoaderData()
  console.log(post)
  return(
    <div>Hola</div>
    )
}
