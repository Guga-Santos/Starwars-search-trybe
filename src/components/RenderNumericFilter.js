import React from 'react';

function RenderNumericFilter(data, column, comparison, value) {
  const comp = (col) => {
    if (comparison === 'maior que') {
      return col[column] > Number(value);
    }
    if (comparison === 'menor que') {
      return col[column] <Number(value);
    }
    if (comparison === 'igual a') {
      return col[column] === Number(value);
    }
  };

  return (
    data
      .filter((col) => comp(col))
      .map((obj) => (
        <tr key={ obj.name }>
          <td>{obj.name}</td>
          <td>{obj.rotation_period}</td>
          <td>{obj.orbital_period}</td>
          <td>{obj.diameter}</td>
          <td>{obj.climate}</td>
          <td>{obj.gravity}</td>
          <td>{obj.terrain}</td>
          <td>{obj.surface_water}</td>
          <td>{obj.population}</td>
          <td>{obj.films.map((film) => film)}</td>
          <td>{obj.created}</td>
          <td>{obj.edited}</td>
          <td>{obj.url}</td>
        </tr>
      ))
  );
}

export default RenderNumericFilter;
