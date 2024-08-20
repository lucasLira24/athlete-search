import React from "react";
import './CardAtleta.css';
import defaultImage from '../assets/defaultImage.png';

function CardAtleta({ atleta, onFavoritar, isFavorito }) {
  const imageSrc = atleta.strThumb ? atleta.strThumb : defaultImage;
  return (
    <div className="card-atleta">
      <img src={imageSrc} alt={atleta.strPlayer} className="imagem-atleta" />
      <h2>{atleta.strPlayer}</h2>
      <p>Esporte: {atleta.strSport}</p>
      <p>Time: {atleta.strTeam}</p>
      <p>Nacionalidade: {atleta.strNationality}</p>
      <button 
        onClick={() => {
          onFavoritar(atleta);
        }}
      >
        {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

export default CardAtleta;
