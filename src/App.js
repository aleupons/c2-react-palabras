import { Crear } from "./components/Crear";
import { Frase } from "./components/Frase";
import { Info } from "./components/Info";
import { Palabras } from "./components/Palabras";

function App() {
  return (
    <>
      <section className="palabras">
        <Palabras />
        <Frase />
      </section>
      <Crear />
      <Info />
    </>
  );
}

export default App;
