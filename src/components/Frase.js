import PropTypes from "prop-types";
import { datosPalabras } from "../schemas/datosPalabras";

export const Frase = (props) => {
  const { palabras } = props;
  return <ul className="resultado"></ul>;
};

Frase.propTypes = {
  palabras: datosPalabras,
};
