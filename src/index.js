import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RAMPService from './services/RAMPService';

/* - - - Чтобы получить доступ к выбранному персонажу - - -*/
const ramService = new RAMPService();

ramService.getAllCharacters().then(res => console.log(res))
ramService.getCharacter(2).then(res => console.log(res))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
