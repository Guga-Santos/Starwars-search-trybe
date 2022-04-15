import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersOnScreen() {
  const context = useContext(PlanetsContext);
  const { numericFilter } = context;
  const { filterByNumericValues } = numericFilter;
  return (
    filterByNumericValues.map((obj) => (
      <h4 key={ Math.random() }>
        {' '}
        {obj.column}
        {' '}
        {obj.comparison}
        {' '}
        {obj.value}
      </h4>
    ))
  );
}

export default FiltersOnScreen;
