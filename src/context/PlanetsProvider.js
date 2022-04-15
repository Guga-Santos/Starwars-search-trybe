import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);

  const [clicked, setClicked] = useState(false);

  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues:
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
  });

  const [substitute, setSubstitute] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleClick = () => {
    setNumericFilter({ filterByNumericValues: substitute });
    setClicked(true);
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
    // console.log(getInfos.results);
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
