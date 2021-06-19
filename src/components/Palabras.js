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
    if (palabra.usos === 0) {
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
    if (palabra.usos !== 0 && palabra.usos !== -1) {
      setPalabras(
        palabras.map((palabraArray) => {
          if (palabraArray.id === palabra.id) {
            palabraArray.usos--;
          }
          return palabraArray;
        })
      );
    }
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
