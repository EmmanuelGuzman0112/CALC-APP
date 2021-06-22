import React from 'react'; //importo la libreria React de la libreria react
import ReactDom from 'react-dom';
// Importar el componente
import App from './App'

// Utilizar el componente, no es html es jsx
// 1. el elemento de este parametro dentro del contenedor del segundo parametro
// 2. punto de montaje
ReactDom.render(
  <App></App>, 
  document.getElementById('root')
);

