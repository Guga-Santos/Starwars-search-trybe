import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const context = useContext(PlanetsContext);
  const { handleNumeric, handleClick } = context;
  return (
    <div className="numeric-filter-container">
      <label htmlFor="column">
        Coluna:
        <select
          id="column"
          data-testid="column-filter"
          onChange={ (e) => handleNumeric(e) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
        value="0"
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
