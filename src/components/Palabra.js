import PropTypes from "prop-types";

export const Palabra = (props) => {
  const { palabra, anyadirPalabra, borrarPalabra, frase } = props;
  return (
    <li
      onClick={() => (frase ? borrarPalabra(palabra) : anyadirPalabra(palabra))}
    >
      {palabra.palabra}
    </li>
  );
};

Palabra.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    dataLenguaje: PropTypes.bool.isRequired,
  }),
  anyadirPalabra: PropTypes.func,
  borrarPalabra: PropTypes.func,
  frase: PropTypes.bool.isRequired,
};
