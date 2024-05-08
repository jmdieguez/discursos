import React from 'react';
import './App.css';
import About from './About'
import presidentesData from './presidentes.json';
import Presidente from './Presidente';
function App() {
  return (
    <>
      <div className='header'>
        <a href="https://github.com/jmdieguez/discursos" target="_blank"><i class="bi bi-github"></i> Ir al repositorio de GitHub</a>
      </div>

      <div className='body'>
        <About/>
        <div id='informe'>
          {presidentesData.map((presidente, index) => (
            <Presidente presidente={presidente} key={presidente.nombre} index={index}/>
          ))}
        </div>

        <div className='footer'>
          <div className='footer-credits'>
            <i class="bi bi-code-slash"></i> 
            <h6> jmdieguez - 2024</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
