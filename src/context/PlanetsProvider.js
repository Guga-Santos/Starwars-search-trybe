import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

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
  const context = { data, handleFilter, filterByName };
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
