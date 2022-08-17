// import React from 'react';
import logo from './logo2.png';
import './App.css';
import MyButton from './components/MyButton';
import { PlusOutlined, MinusOutlined  } from '@ant-design/icons';
import { useState } from 'react';




function App() {
  const [color, setColor] = useState('red')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <p>
          Vous voici sur mon application de gestion de listes !
        </p>

        <MyButton
          tooltip="Ajouter une liste"
          color={color}
          onClick={() => console.log(' Le bouton a été cliqué !')}
          icon={<PlusOutlined />}
        >
          Ajouter une liste

        </MyButton>
        <MyButton
          tooltip="Supprimer une liste"
          onClick={() => console.log(' Le bouton a été cliqué !')}
          icon={<MinusOutlined />}
        >
          Supprimer une liste

        </MyButton>





      </header>
    </div>
  );
}

export default App;
