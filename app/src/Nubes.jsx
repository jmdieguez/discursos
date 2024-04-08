import React from 'react';
import './Nubes.css';

function Nubes(props) {
  return (
    <div className="image-container">
        <h3>
          Nube de palabras generalmente usadas por {props.presidente}
        </h3>

        <div className="cloud-border">
          <img src={`./images/${props.presidente}_palabras.png`}
              alt={`Imagen de nube de palabras generalmente usadas por ${props.presidente}`} />
        </div>
        
        <h3>
          Nube de palabras con carga sentimental usadas por {props.presidente}
        </h3>

        <div className="cloud-border">
          <img src={`./images/${props.presidente}_palabras_sentimentales.png`}
              alt={`Imagen de nube de palabras con carga sentimental usadas por ${props.presidente}`} />
        </div>
    </div>
  );
}

export default Nubes;