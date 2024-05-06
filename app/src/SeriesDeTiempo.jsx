import React from 'react';
import './SeriesDeTiempo.css';

function SeriesDeTiempo(props) {
  return (
    <div className="image-container">
        <div class="container">
            <div class="left">
                <h3>
                Variación de la polaridad emocional (+/-/NEU) de los discursos de {props.presidente} a través del tiempo.
                </h3>

                <div className="series-border">
                <img src={`./images/${props.presidente}_polaridad.png`}
                    alt={`Variación de la polaridad emocional (+/-/NEU) de los discursos de ${props.presidente} a través del tiempo.`} />
                </div>
            </div>
            <div class="right">
                <h3>
                Variación de las emociones de los discursos de {props.presidente} a través del tiempo.
                </h3>

                <div className="series-border">
                <img src={`./images/${props.presidente}_emociones.png`}
                    alt={`Variación de las emociones de los discursos de ${props.presidente} a través del tiempo.`} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default SeriesDeTiempo;