import { datosPalabras } from "../schemas/datosPalabras";
import { Frase } from "./Frase";
import { Palabra } from "./Palabra";

export const Palabras = (props) => {
  const { palabras } = props;
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {palabras.map(({ palabra, dataLenguaje }) => (
          <Palabra
            key={palabra}
            palabra={palabra}
            dataLenguaje={dataLenguaje}
          />
        ))}
      </ul>
      <Frase palabras={palabras} />
    </section>
  );
};

Palabras.propTypes = {
  palabras: datosPalabras,
};
