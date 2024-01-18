const cidades = [
    {
      regiao: 'Norte',
      estados: [
        {
          estado: 'Acre',
          capital: 'Rio Branco',
          cidades: ['Acrelândia','Assis Brasil','Brasiléia','Bujari','Capixaba','Cruzeiro do Sul','Epitaciolândia','Feijó','Jordão','Mâncio Lima','Manoel Urbano','Marechal Thaumaturgo','Plácido de Castro','Porto Walter','Rio Branco','Rodrigues Alves','Santa Rosa do Purus','Senador Guiomard','Sena Madureira','Tarauacá','Xapuri','Porto Acre'
        ],
        },
        {
          estado: 'Amapá',
          capital: 'Macapá',
          cidades: ['Macapá', 'Santana', 'Laranjal do Jari', /* ... */],
        },
        {
            estado:'Amazonas',
            capital: 'Manaus',
            cidades: ['Manaus']
        },
        {
            estado:'Pará',
            capital: 'Belém do Pará',
            cidades: ['Belém']
        },
        {
            estado:'Rondonia',
            capital: 'Porto Velho',
            cidades: ['Porto Velho']
        },
        {
            estado:'Roraima',
            capital: 'Boa Vista',
            cidades: ['Boa Vista']
        },
        {
            estado:'Tocantins',
            capital: 'Palmas',
            cidades: ['Palmas']
        }
        
      ],
    },
    {
      regiao: 'Nordeste',
      estados: [
        {
          estado: 'Alagoas',
          capital: 'Maceio',
          cidades: ['Maceió', 'Arapiraca', 'Palmeira dos Índios', /* ... */],
        },
        {
          estado: 'Bahia',
          capital: 'Salvador',
          cidades: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
        },
        {
          estado: 'Ceará',
          capital: 'Fortaleza',
          cidades: ['Fortaleza', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
        },
        {
            estado: 'Maranhão',
            capital: 'São Luis',
            cidades: ['São Luis', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
          {
            estado: 'Paraiba',
            capital: 'João Pessoa',
            cidades: ['João Pessoa', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
          {
            estado: 'Pernambuco',
            capital: 'Recife',
            cidades: ['Recife', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
          {
            estado: 'Piauí',
            capital: 'Teresina',
            cidades: ['Teresina', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
          {
            estado: 'Rio Grande do Norte',
            capital: 'Natal',
            cidades: ['Natal', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
          {
            estado: 'Sergipe',
            capital: 'Aracaju',
            cidades: ['Aracaju', 'Feira de Santana', 'Vitória da Conquista', /* ... */],
          },
        // Adicione outros estados da região Nordeste conforme necessário
      ],
    },
    {
      regiao: 'Sudeste',
      estados: [
        {
          estado: 'São Paulo',
          capital: 'São Paulo',
          cidades: ['São Paulo', 'Guarulhos', 'Campinas', /* ... */],
        },
        {
          estado: 'Rio de Janeiro',
          capital: 'Rio de Janeiro',
          cidades: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', /* ... */],
        },
        {
            estado: 'Minas Gerais',
            capital: 'Belo HOrizonte',
            cidades: ['Belo Horizonte', 'Guarulhos', 'Campinas', /* ... */],
        },
        {
            estado: 'Espirito Santo',
            capital: 'Vitoria',
            cidades: ['Vitória', 'Guarulhos', 'Campinas', /* ... */],
          },
        // Adicione outros estados da região Sudeste conforme necessário
      ],
    },
    {
      regiao: 'Sul',
      estados: [
        {
          estado: 'Paraná',
          capital: 'Curitiba',
          cidades: ['Curitiba', 'Londrina', 'Maringá', /* ... */],
        },
        {
          estado: 'Santa Catarina',
          capital: 'Florianópolis',
          cidades: ['Florianópolis', 'Joinville', 'Blumenau', /* ... */],
        },
        {
            estado: 'Rio Grande do Sul',
            capital: 'Porto Alegre',
            cidades: ['Porto Alegre', 'Guarulhos', 'Campinas', /* ... */],
          },
        // Adicione outros estados da região Sul conforme necessário
      ],
    },
    {
      regiao: 'Centro-Oeste',
      estados: [
        {
          estado: 'Goiás',
          sigla: 'GO',
          capital: 'Goiânia',
          cidades: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', /* ... */],
        },
        {
          estado: 'Mato Grosso do Sul',
          sigla: 'MS',
          capital: 'Campo Grande',
          cidades: ['Campo Grande', 'Dourados', 'Três Lagoas', /* ... */],
        },
        {
            estado: 'Mato Grosso',
            sigla: 'MT',
            capital: 'Cuiabá',
            cidades: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', /* ... */],
          },
          {
            estado: 'Distrito Federal',
            sigla: 'DF',
            capital: 'Distrito Federal',
            cidades: [],
          },
            // Adicione outros estados da região Centro-Oeste conforme necessário
      ],
    },
  ];
  
  export default cidades;
  