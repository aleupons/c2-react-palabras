import { useState } from "react";
import { Palabra } from "./Palabra";

export const Palabras = () => {
  const [palabras, setPalabras] = useState([
    { palabra: "me", dataLenguaje: false },
    { palabra: "JavaScript", dataLenguaje: true },
    { palabra: "el", dataLenguaje: false },
    { palabra: "la", dataLenguaje: false },
    { palabra: "gusta", dataLenguaje: false },
    { palabra: "odio", dataLenguaje: false },
    { palabra: "no", dataLenguaje: false },
    { palabra: "muy", dataLenguaje: false },
    { palabra: "y", dataLenguaje: false },
    { palabra: "Java", dataLenguaje: true },
    { palabra: "mucho", dataLenguaje: false },
    { palabra: "de", dataLenguaje: false },
    { palabra: "poco", dataLenguaje: false },
    { palabra: "programador", dataLenguaje: false },
    { palabra: "amigo", dataLenguaje: false },
    { palabra: "programadora", dataLenguaje: false },
    { palabra: "amiga", dataLenguaje: false },
    { palabra: "soy", dataLenguaje: false },
    { palabra: "también", dataLenguaje: false },
    { palabra: "pero", dataLenguaje: false },
    { palabra: "gustan", dataLenguaje: false },
    { palabra: "gatos", dataLenguaje: false },
    { palabra: "los", dataLenguaje: false },
    { palabra: "perros", dataLenguaje: false },
  ]);
  return (
    <ul className="lista-palabras">
      {palabras.map(({ palabra, dataLenguaje }) => (
        <Palabra key={palabra} palabra={palabra} dataLenguaje={dataLenguaje} />
      ))}
    </ul>
  );
};
