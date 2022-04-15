import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FiltersOnScreen from './components/FiltersOnScreen';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <NumericFilter />
      <FiltersOnScreen />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
