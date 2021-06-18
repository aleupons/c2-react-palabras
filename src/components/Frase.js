import PropTypes from "prop-types";
import { Palabra } from "./Palabra";

export const Frase = (props) => {
  const { frase, borrarPalabra } = props;
  return (
    <ul className="resultado">
      {frase.map((palabra, i) =>
        i === 0 ? (
          <Palabra
            key={palabra.id}
            palabra={palabra}
            borrarPalabra={borrarPalabra}
            frase={true}
            first={true}
          />
        ) : (
          <Palabra
            key={palabra.id}
            palabra={palabra}
            borrarPalabra={borrarPalabra}
            frase={true}
          />
        )
      )}
    </ul>
  );
};

Frase.propTypes = {
  frase: PropTypes.array.isRequired,
  borrarPalabra: PropTypes.func.isRequired,
};
