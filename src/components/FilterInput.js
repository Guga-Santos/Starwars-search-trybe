import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterInput() {
  const context = useContext(PlanetsContext);
  const { handleFilter } = context;
  return (
    <label htmlFor="input-search">
      Search:
      <input
        type="text"
        onChange={ (e) => handleFilter(e) }
        data-testid="name-filter"
      />
    </label>
  );
}

export default FilterInput;
