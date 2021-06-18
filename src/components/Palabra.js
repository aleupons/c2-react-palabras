import PropTypes from "prop-types";

export const Palabra = (props) => {
  const { palabra, anyadirPalabra, borrarPalabra, frase, first } = props;
  return (
    <li
      onClick={() => (frase ? borrarPalabra(palabra) : anyadirPalabra(palabra))}
    >
      {first
        ? palabra.palabra.charAt(0).toUpperCase() + palabra.palabra.slice(1)
        : palabra.palabra}
    </li>
  );
};

Palabra.propTypes = {
  palabra: PropTypes.shape({
    id: PropTypes.number,
    palabra: PropTypes.string.isRequired,
    dataLenguaje: PropTypes.bool.isRequired,
    usos: PropTypes.number,
  }),
  anyadirPalabra: PropTypes.func,
  borrarPalabra: PropTypes.func,
  frase: PropTypes.bool.isRequired,
  first: PropTypes.bool,
};
