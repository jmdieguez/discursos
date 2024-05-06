import React from 'react';
import './App.css';
import presidentesData from './presidentes.json';
import Presidente from './Presidente';
function App() {
  return (
    <div className='body'>
      {presidentesData.map((presidente, index) => (
        <Presidente presidente={presidente} key={presidente.nombre} index={index}/>
      ))}
    </div>
  );
}

export default App;
