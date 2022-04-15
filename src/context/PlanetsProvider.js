import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);

  const [dataFiltered, setDataFiltered] = useState([]);

  const [columna, setColumna] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [clicked, setClicked] = useState(false);

  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [],
  });

  const [substitute, setSubstitute] = useState({
    column: columna[0],
    comparison: 'maior que',
    value: 0,
  });

  const filteredData = () => {
    const { column, comparison, value } = substitute;
    const comp = (col) => {
      if (comparison === 'maior que') {
        return col[column] > Number(value);
      }
      if (comparison === 'menor que') {
        return col[column] < Number(value);
      }
      if (comparison === 'igual a') {
        return col[column] <= Number(value);
      }
    };
    setDataFiltered(dataFiltered.filter((obj) => comp(obj)));
  };

  const handleClick = () => {
    setNumericFilter((prev) => ({ filterByNumericValues:
       [...prev.filterByNumericValues, substitute] }));
    setClicked(true);
    setColumna((prev) => prev.filter((obj) => obj !== substitute.column));
    filteredData();
    setSubstitute({
      column: columna[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  const handleNumeric = ({ target: { value, id } }) => {
    setSubstitute((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter({ filterByName: { name: value.toLowerCase() } });
  };

  const fetchAPI = async () => {
    const getInfos = await planetsAPI();
    setData(getInfos.results);
    setDataFiltered(getInfos.results);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const { children } = props;
  const { filterByName } = filter;
  const { filterByNumericValues } = numericFilter;
  const context = {
    data,
    clicked,
    filterByName,
    filterByNumericValues,
    numericFilter,
    substitute,
    columna,
    dataFiltered,
    handleFilter,
    handleNumeric,
    handleClick,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
