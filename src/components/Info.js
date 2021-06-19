export const Info = (props) => {
  const { frase } = props;
  const lenguajes = frase
    .filter((palabra) => palabra.dataLenguaje)
    .map((palabraLenguaje) => palabraLenguaje.palabra)
    .filter((palabra, i, palabras) => palabras.indexOf(palabra) === i);
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
          Contiene {lenguajes.length} lenguaje/s de programación
          <ul>
            {lenguajes.map((lenguaje) => (
              <li>{lenguaje}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
