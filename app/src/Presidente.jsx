import React from 'react';
import Avatar from './Avatar';
import Nubes from './Nubes';

function Presidente(props) {
  return (
    <div key={props.index}>
        <Avatar presidente={props.presidente} />
        <Nubes presidente={props.presidente.nombre} />
    </div>
  );
}

export default Presidente;