import React from 'react';
import './TodoSearch.css';

// Recibe el valor de la barra de busqueda y el actualizador desde App.js
function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // Cambia el texto de la barra de busqueda en base a lo que escribe el usuario
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };