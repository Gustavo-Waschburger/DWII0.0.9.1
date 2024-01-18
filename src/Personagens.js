import React from 'react';

let Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Adallbert Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Chraisler Redfield',
    'Balbert Wesker',
    'Calbert Wesker',
    'Gustavo Waschburger',
  ];

  // Filtra os personagens da família especificada nas props
  const personagensFamilia = personagens.filter(personagem =>
    //personagem.startsWith(props.familia)
    personagem.toLowerCase().includes(props.familia.toLowerCase())
    //personagem.includes(props.familia)
  );

  return (
    <div>
      <h3>Personagens encontrados com: ({props.familia})</h3>
      <ul>
        {personagensFamilia.map(personagem => (
          <li key={personagem}>{personagem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Personagens;
