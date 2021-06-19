import PropTypes from "prop-types";
import { useState } from "react";
import { Frase } from "./Frase";
import { Palabra } from "./Palabra";

export const Palabras = (props) => {
  const { palabras, setPalabras, frase, setFrase } = props;
  const [idMasAlta, setIdMasAlta] = useState(
    frase
      .map((palabra) => palabra.id)
      .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 1)
  );
  const anyadirPalabra = ({ palabra, dataLenguaje, usos }) => {
    const nVecesAnyadida = frase.filter(
      (palabraFrase) => palabraFrase.palabra === palabra
    ).length;
    console.log(nVecesAnyadida);
    if (usos > 0 && usos === nVecesAnyadida) {
      return;
    }
    setIdMasAlta(idMasAlta + 1);
    setFrase([
      ...frase,
      {
        id: idMasAlta,
        palabra: palabra,
        dataLenguaje: dataLenguaje,
        usos: usos,
      },
    ]);
  };
  const borrarPalabra = (palabra) => {
    setFrase(frase.filter((palabraFrase) => palabra.id !== palabraFrase.id));
  };
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {palabras.map((palabra) => (
          <Palabra
            key={palabra.id}
            palabra={palabra}
            anyadirPalabra={anyadirPalabra}
            frase={false}
          />
        ))}
      </ul>
      <Frase frase={frase} borrarPalabra={borrarPalabra} />
    </section>
  );
};

Palabras.propTypes = {
  palabras: PropTypes.array.isRequired,
  setPalabras: PropTypes.func.isRequired,
  frase: PropTypes.array.isRequired,
  setFrase: PropTypes.func.isRequired,
};
