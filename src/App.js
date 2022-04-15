import React from 'react';
import './App.css';
import FilterInput from './components/FilterInput';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <FilterInput />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
