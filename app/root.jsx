/* eslint-disable react-hooks/rules-of-hooks */

import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function app() {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
    console.log("C", carrito);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Manejo de errores

// export function CatchBoundary() {
//   const error = useCatch();
//   return (
//     <Document>
//       <p className="error">
//         {error.status} {error.statusText}
//       </p>
//     </Document>
//   );
// }
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link to="/" className="error-enlace">
          Tal vez quieras volver a la página principal
        </Link>
      </Document>
    );
  }
}
