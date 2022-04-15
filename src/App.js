import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <NumericFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
