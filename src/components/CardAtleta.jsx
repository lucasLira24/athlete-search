import React from "react";
import './CardAtleta.css';

function CardAtleta({ atleta, onFavoritar, isFavorito }) {
  return (
    <div className="card-atleta">
      <img src={atleta.strThumb} alt={atleta.strPlayer} className="imagem-atleta" />
      <h2>{atleta.strPlayer}</h2>
      <p>Esporte: {atleta.strSport}</p>
      <p>Time: {atleta.strTeam}</p>
      <p>Nacionalidade: {atleta.strNationality}</p>
      <p>Data de Nascimento: {atleta.dateBorn}</p>
      <p>Instagram: {atleta.strInstagram}</p>
      <button 
        onClick={() => {
          console.log(`${isFavorito ? 'Removendo' : 'Adicionando'} atleta aos favoritos:`, atleta);
          onFavoritar(atleta);
        }}
      >
        {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

export default CardAtleta;
