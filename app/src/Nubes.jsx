import React from 'react';
import './Nubes.css';

function Nubes(props) {
    const img1 = `../../images/${props.presidente}_palabras.jpg`
    console.log(img1)
  return (
    <div className="image-container">
        <img src={img1}
            alt="Nube de palabras" />
    </div>
  );
}

export default Nubes;