import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Personagens from './Personagens';


const App = () => {
  const [filtroFamilia, setFiltroFamilia] = useState('');
  const [novoPersonagem, setNovoPersonagem] = useState('');
  let [personagens, setPersonagens] = useState([Personagens]);

  const handleFiltroChange = (event) => {
    setFiltroFamilia(event.target.value);
    
  };

  const handleNovoPersonagemChange = (event) => {
    setNovoPersonagem(event.target.value);
    
  };

  const adicionarPersonagem = () => {
    if (novoPersonagem.trim() && !personagens.includes(novoPersonagem)) {
      setPersonagens([...personagens, novoPersonagem]);
      setNovoPersonagem('');
    }
  };

  return (
    <div className='container'>
      <img src={logo} className="App-logo" alt="logo" />
       
      <div>
        <label htmlFor="filtroInput">Filtrar por família:</label>
        <input
          type="text"
          id="filtroInput"
          value={filtroFamilia}
          onChange={handleFiltroChange}
        />
      </div>
      
      <div>
        <label htmlFor="novoPersonagem">Novo Personagem:</label>
        <input
          type="text"
          id="novoPersonagem"
          value={novoPersonagem}
          onChange={handleNovoPersonagemChange}
        />
        <button onClick={adicionarPersonagem}>Adicionar</button>
      </div>

      {/* Exibe personagens filtrados com base no texto digitado */}
      <Personagens familia={filtroFamilia} />
    </div>
    
  
  );
}

export default App;
