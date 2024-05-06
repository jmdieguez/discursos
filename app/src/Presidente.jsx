import React from 'react';
import './Presidente.css';
import Avatar from './Avatar';
import Nubes from './Nubes';
import SeriesDeTiempo from './SeriesDeTiempo';

function Presidente(props) {
  return (
    <div className='content' key={props.index}>
      <Avatar presidente={props.presidente} />
      <Nubes presidente={props.presidente.nombre} />
      <SeriesDeTiempo presidente={props.presidente.nombre} />
    </div>
  );
}

export default Presidente;