import React from 'react';
import './App.css';
import presidentesData from './presidentes.json';
import Avatar from './Avatar';
import Nubes from './Nubes';

function App() {
  return (
      <div className='body'>
        {presidentesData.map((presidente, index) => (
          <div key={index}>
              <Avatar presidente={presidente} />
              <Nubes presidente={presidente.nombre} />
          </div>

        ))}
      </div>
  );
}

export default App;
