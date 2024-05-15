import React from 'react';
import './About.css';
function About() {
  return (
    <div className='about-content'>
        <img src="https://lens-storage.storage.googleapis.com/png/04ea97857cb54c5f8b5856b4345605e1"
             alt="distintas emociones que se analizan en el proyecto" />
        <h1>
            Argentina: Análisis Lingüistico de presidentes a través del tiempo
        </h1>

        <h3>
            No es ninguna novedad hoy en día, mayo de 2024, que Argentina viene sufriendo una crisis económica constante
            hace años, por lo que analizar los discursos presidenciales de Argentina a lo largo del tiempo es fundamental 
            para comprender la evolución política y social del país. Estos discursos reflejan las prioridades, 
            valores y estrategias de cada gobierno, así como las preocupaciones y aspiraciones de la sociedad 
            en diferentes momentos históricos. Mediante la creación de nubes de palabras y análisis de sentimientos, 
            como alegría, enojo, miedo, sorpresa, disgusto y tristeza, podemos identificar patrones emocionales y 
            discursivos, revelando tendencias, cambios de discurso y la conexión entre la retórica política 
            y el estado de ánimo de la población. Este enfoque nos permite profundizar en el análisis de la 
            comunicación política y entender mejor cómo los líderes influyen y responden a las emociones 
            colectivas de la nación.
        </h3>

        <h2>
          ¿Cuáles son las palabras más usadas por cada presidente? <br/>
          ¿Cuáles son o fueron sus prioridades? <br/>
          ¿A qué eventos históricos se pueden atribuir grandes cambios emocionales de cierto presidente a partir de una fecha?
        </h2>

        <a href="#informe">
          <button type="button" class="btn btn-dark">
            Ir al informe
          </button>
        </a>
    </div>
  );
}

export default About;
