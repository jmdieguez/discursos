import React from 'react';
import './Presidente.css';
import Avatar from './Avatar';
import Nubes from './Nubes';

function Presidente(props) {
  return (
    <div className='content' key={props.index}>
        <Avatar presidente={props.presidente} />
        <Nubes presidente={props.presidente.nombre} />
    </div>
  );
}

export default Presidente;