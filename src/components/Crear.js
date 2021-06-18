import PropTypes from "prop-types";
import { useState } from "react";

export const Crear = (props) => {
  const { palabras, setPalabras } = props;
  const [nuevaPalabra, setNuevaPalabra] = useState("");
  const [lenguaje, setLenguaje] = useState(false);
  const [usos, setUsos] = useState(0);
  const [idMasAlta, setIdMasAlta] = useState(
    palabras
      .map((palabra) => palabra.id)
      .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 1)
  );
  const anyadirNuevaPalabra = (e, nuevaPalabra, lenguaje, usos) => {
    e.preventDefault();
    if (
      nuevaPalabra.includes(" ") ||
      palabras.reduce(
        (acumulador, palabra) =>
          palabra.palabra.toLowerCase() === nuevaPalabra.toLowerCase()
            ? acumulador + 1
            : acumulador,
        0
      ) !== 0
    ) {
      return;
    }
    setIdMasAlta(idMasAlta + 1);
    setPalabras([
      ...palabras,
      {
        id: idMasAlta + 1,
        palabra: nuevaPalabra,
        dataLenguaje: lenguaje,
        usos: usos,
      },
    ]);
  };
  return (
    <section className="crear-palabras">
      <form
        className="form-palabras"
        onSubmit={(e) => anyadirNuevaPalabra(e, nuevaPalabra, lenguaje, usos)}
      >
        <div className="form-grupo">
          <input
            type="text"
            placeholder="Nueva palabra"
            value={nuevaPalabra}
            onChange={(e) => setNuevaPalabra(e.target.value)}
            required
          />
        </div>
        <div className="form-grupo">
          <select
            value={usos}
            onChange={(e) => setUsos(+e.target.value)}
            required
          >
            <option value={-1} defaultValue>
              Máximo de veces
            </option>
            <option value={-1}>Sin límite</option>
            <option value={1}>1 vez</option>
            <option value={2}>2 veces</option>
            <option value={3}>3 veces</option>
          </select>
        </div>
        <div className="form-grupo">
          <label>
            <input
              type="checkbox"
              value={lenguaje}
              onChange={(e) => setLenguaje(e.target.checked)}
            />{" "}
            Es un lenguaje de programación
          </label>
        </div>
        <div className="form-grupo">
          <button type="submit" disabled={!nuevaPalabra}>
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};

Crear.propTypes = {
  palabras: PropTypes.array.isRequired,
  setPalabras: PropTypes.func.isRequired,
};
