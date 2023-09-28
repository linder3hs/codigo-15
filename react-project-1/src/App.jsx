import { useState } from "react";
import { Counter, Footer, Header } from "./components";

export default function App() {
  const [name, setName] = useState("Linder");

  // puedo agregar mas funciones
  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre");
    setName(newName);
  };

  return (
    <>
      <Header />
      <h1 className="bg-custom-color text-white">
        Mi primer componente {name}
      </h1>
      <button
        onClick={changeName}
        className="text-custom-color border border-custom-color"
      >
        Cambiar nombre
      </button>
      <hr />
      <Counter />
      <Footer />
    </>
  );
}
