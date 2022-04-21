import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);

  const [dataFiltered, setDataFiltered] = useState([]);

  const INITIAL_COLUMN = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [columna, setColumna] = useState([...INITIAL_COLUMN]);

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

  // const filteredData = () => {
  //   const { column, comparison, value } = substitute;
  //   const comp = (col) => {
  //     if (comparison === 'maior que') {
  //       return col[column] > Number(value);
  //     }
  //     if (comparison === 'menor que') {
  //       return col[column] <= Number(value);
  //     }
  //     if (comparison === 'igual a') {
  //       return col[column] === value;
  //     }
  //   };
  //   setDataFiltered(dataFiltered.filter((obj) => comp(obj)));
  // };

  const testeMaroto = () => {
    const { filterByNumericValues } = numericFilter;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        setDataFiltered(data.filter((obj) => obj[column] > Number(value)));
      }
      if (comparison === 'menor que') {
        setDataFiltered(data.filter((obj) => obj[column] <= Number(value)));
      }
      if (comparison === 'igual a') {
        setDataFiltered(data.filter((obj) => obj[column] === value));
      }
    });
  };

  const handleClick = () => {
    setNumericFilter((prev) => ({ filterByNumericValues:
       [...prev.filterByNumericValues, substitute] }));

    setClicked(true);

    setColumna((prev) => prev.filter((obj) => obj !== substitute.column));

    testeMaroto();

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

  const deleteFilter = ({ target: { id } }) => {
    setNumericFilter((prev) => ({
      filterByNumericValues: prev.filterByNumericValues
        .filter((obj) => obj.column !== id),
    }));

    testeMaroto();

    setColumna((prev) => ([
      ...prev,
      id,
    ]));
  };

  // useEffect(() => {
  //   testeMaroto();
  // }, [testeMaroto]);
  
  useEffect(() => {
    const fetchAPI = async () => {
      const getInfos = await planetsAPI();
      setData(getInfos.results);
      setDataFiltered(getInfos.results);
      // console.log(getInfos.results)
    };
    fetchAPI();
  }, []);

  const resetFilters = () => {
    setDataFiltered(data);
    setNumericFilter({ filterByNumericValues: [] });
    setColumna([...INITIAL_COLUMN]);
  };

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
    deleteFilter,
    resetFilters,
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
