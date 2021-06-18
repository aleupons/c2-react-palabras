import PropTypes from "prop-types";

export const Palabra = (props) => {
  const { palabra, dataLenguaje } = props;
  return <li>{palabra}</li>;
};

Palabra.propTypes = {
  palabra: PropTypes.string.isRequired,
  dataLenguaje: PropTypes.bool.isRequired,
};
