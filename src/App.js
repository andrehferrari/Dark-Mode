import React, { useState } from "react";
import Header from './components/Header'
import Conteudo from './components/Body'
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState('desligado')


  return (
    <div className="App">
      <Header
        modo={darkMode}
        estado={setDarkMode}
      />
      <Conteudo
        modo={darkMode}
        estado={setDarkMode}
      />
    </div>
  );
}

export default App;