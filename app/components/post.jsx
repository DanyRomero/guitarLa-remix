import { Link } from "@remix-run/react"

export default function Post({post}){
  console.log(post)
  const {contenido, imagen, titulo, url, publishedAt} = post
  return (
    <article className="post">
      <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`}/>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{publishedAt}</p>
        <p className="resumen">{contenido[0].children[0].text}</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer post</Link>

      </div>
    </article>
  )
}