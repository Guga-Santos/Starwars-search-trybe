import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const context = useContext(PlanetsContext);
  const { handleNumeric, handleClick, substitute, columna } = context;

  return (
    <div className="numeric-filter-container">
      <label htmlFor="column">
        Coluna:
        <select
          id="column"
          data-testid="column-filter"
          onChange={ (e) => handleNumeric(e) }
        >
          {columna.map((opt) => (
            <option key={ opt } value={ opt }>{opt}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador:
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => handleNumeric(e) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        id="value"
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handleNumeric(e) }
        value={ substitute.value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </div>
  );
}

export default NumericFilter;
