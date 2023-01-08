import React from 'react';
import ReactDOM from 'react-dom/client';
import Cripto from './criptoDetails/cripto';
import Clock from './clock/clock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <Clock/>
    <Cripto />
  </>
);



