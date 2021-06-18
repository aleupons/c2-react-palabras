import { useState } from "react";
import { Crear } from "./components/Crear";
import { Info } from "./components/Info";
import { Palabras } from "./components/Palabras";

function App() {
  const [palabras, setPalabras] = useState([
    { id: 1, palabra: "me", dataLenguaje: false },
    { id: 2, palabra: "JavaScript", dataLenguaje: true },
    { id: 3, palabra: "el", dataLenguaje: false },
    { id: 4, palabra: "la", dataLenguaje: false },
    { id: 5, palabra: "gusta", dataLenguaje: false },
    { id: 6, palabra: "odio", dataLenguaje: false },
    { id: 7, palabra: "no", dataLenguaje: false },
    { id: 8, palabra: "muy", dataLenguaje: false },
    { id: 9, palabra: "y", dataLenguaje: false },
    { id: 10, palabra: "Java", dataLenguaje: true },
    { id: 11, palabra: "mucho", dataLenguaje: false },
    { id: 12, palabra: "de", dataLenguaje: false },
    { id: 13, palabra: "poco", dataLenguaje: false },
    { id: 14, palabra: "programador", dataLenguaje: false },
    { id: 15, palabra: "amigo", dataLenguaje: false },
    { id: 16, palabra: "programadora", dataLenguaje: false },
    { id: 17, palabra: "amiga", dataLenguaje: false },
    { id: 18, palabra: "soy", dataLenguaje: false },
    { id: 19, palabra: "también", dataLenguaje: false },
    { id: 20, palabra: "pero", dataLenguaje: false },
    { id: 21, palabra: "gustan", dataLenguaje: false },
    { id: 22, palabra: "gatos", dataLenguaje: false },
    { id: 23, palabra: "los", dataLenguaje: false },
    { id: 24, palabra: "perros", dataLenguaje: false },
  ]);
  const [frase, setFrase] = useState([]);
  return (
    <>
      <Palabras
        palabras={palabras}
        setPalabras={setPalabras}
        frase={frase}
        setFrase={setFrase}
      />
      <Crear palabras={palabras} setPalabras={setPalabras} />
      <Info frase={frase} />
    </>
  );
}

export default App;
