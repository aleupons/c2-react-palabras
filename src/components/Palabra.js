import PropTypes from "prop-types";
import { datosPalabras } from "../schemas/datosPalabras";

export const Palabra = (props) => {
  const { palabra, dataLenguaje } = props;
  return <li>{palabra}</li>;
};

Palabra.propTypes = {
  palabra: datosPalabras,
  dataLenguaje: PropTypes.bool.isRequired,
};
