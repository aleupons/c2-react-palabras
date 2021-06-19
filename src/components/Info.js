export const Info = (props) => {
  const { frase } = props;
  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{frase.length}</span>
        </li>
        <li>
          Nº de caracteres{" "}
          <span>
            {frase.reduce(
              (acumulador, palabra) => acumulador + palabra.palabra.length,
              0
            )}
          </span>
        </li>
        <li>
          Longitud media{" "}
          <span>
            {frase
              .map((palabra) => palabra.palabra.length)
              .reduce(
                (acumulador, longitudPalabra, i, longitudes) =>
                  longitudPalabra / longitudes.length + acumulador,
                0
              )
              .toFixed(2)}
          </span>
        </li>
        <li>
          Contiene{" "}
          {frase.reduce(
            (acumulador, palabra) =>
              palabra.dataLenguaje ? acumulador + 1 : acumulador,
            0
          )}{" "}
          lenguaje/s de programación
          <ul>
            {frase
              .filter((palabra) => palabra.dataLenguaje)
              .map((palabraLenguaje) => (
                <li>{palabraLenguaje.palabra}</li>
              ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
