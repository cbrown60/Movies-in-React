import React from 'react';
import ReactDOM from 'react-dom';
import MovieTable from './components/MovieTable.jsx'


window.onload = function(){
  ReactDOM.render(
    <MovieTable />,
    document.getElementById('app')
  );
}
