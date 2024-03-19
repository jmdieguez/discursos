import React from 'react';
import './Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar-container">
        <h2 className='text'>{props.presidente.nombre}</h2>
        
        <div className="avatar">
            <img src={props.presidente.imagen} alt={"Imagen de " + props.presidente.nombre} />
        </div>

        <h5 className='text'>{props.presidente.bio}</h5>
    </div>
  );
}

export default Avatar;