import React, { useState } from 'react';
import './App.css';
import PesquisaAtleta from './components/PesquisaAtleta';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import searchNotFound from './assets/searchNotFound.png';
import banner from './assets/banner.png';


function App() {
  const [resultados, setResultados] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (atleta) => {
    setFavoritos((prevFavoritos) => {
      console.log('Favoritos atuais:', prevFavoritos);
      console.log('Atleta a adicionar:', atleta);
      const isFavorito = prevFavoritos.some(fav => fav.idPlayer === atleta.idPlayer);
      if (isFavorito) {
        console.log('Atleta já está na lista de favoritos');
        return prevFavoritos;
      }
      console.log('Adicionando atleta à lista de favoritos');
      return [...prevFavoritos, atleta];
    });
  };

  const removerFavorito = (atleta) => {
    setFavoritos((prevFavoritos) => {
      console.log('Favoritos atuais:', prevFavoritos);
      console.log('Atleta a remover:', atleta);

      const isFavorito = prevFavoritos.some(fav => fav.idPlayer === atleta.idPlayer);
      if (!isFavorito) {
        console.log('Atleta não está na lista de favoritos');
        return prevFavoritos;
      }

      console.log('Removendo atleta da lista de favoritos');
      return prevFavoritos.filter(fav => fav.idPlayer !== atleta.idPlayer);
    });
  };

  return (
    <div className="App">
      <div className="banner">
        <img src= {banner} alt="banner"/>
      </div>
      <PesquisaAtleta
        onResultados={setResultados}
        onSearchExecuted={() => setIsSearchExecuted(true)}
      />
      <div className="resultados">
        {isSearchExecuted && resultados.length === 0 ? (
          <div className="semResultados">
          <img src= {searchNotFound} alt="Search Not Found" />
          <p>Nenhum jogador encontrado!</p>
          </div>
        ) : (
          resultados.map((atleta) => (
            <div key={atleta.idPlayer} className="card-container">
              <CardAtleta atleta={atleta} onFavoritar={adicionarFavorito} isFavorito={favoritos.some(fav => fav.idPlayer === atleta.idPlayer)} />
            </div>
          ))
        )}
      </div>
      <div className="favoritos">
      <PainelFavoritos favoritos={favoritos} onRemoverFavorito={removerFavorito}/>
      </div>
    </div>
  );
}

export default App;
