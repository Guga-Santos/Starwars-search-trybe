import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersOnScreen() {
  const context = useContext(PlanetsContext);
  const { numericFilter, deleteFilter, resetFilters } = context;
  const { filterByNumericValues } = numericFilter;
  return (
    <div>
      {
        filterByNumericValues.map((obj) => (
          <div key={ Math.random() } style={ { display: 'flex', alignItems: 'center' } }>
            <h4 data-testid="filter">
              {' '}
              {obj.column}
              {' '}
              {obj.comparison}
              {' '}
              {obj.value}
            </h4>
            <button
              type="button"
              style={ { margin: '0px 10px' } }
              id={ obj.column }
              onClick={ deleteFilter }
              data-testid="filter"
            >
              X

            </button>
          </div>
        ))
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ resetFilters }
      >
        Remover Filtros

      </button>
    </div>
  );
}

export default FiltersOnScreen;
