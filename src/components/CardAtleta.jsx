import React from "react";
import './CardAtleta.css';

function CardAtleta({ atleta }) {
  return (
    <div className="card-atleta">
      <img src={atleta.strThumb} alt={atleta.strPlayer} className="imagem-atleta" />
      <h2>{atleta.strPlayer}</h2>
      <p>Esporte: {atleta.strSport}</p>
      <p>Time: {atleta.strTeam}</p>
      <p>Nacionalidade: {atleta.strNationality}</p>
      <p>Data de Nascimento: {atleta.dateBorn}</p>
      <p>Instagram: {atleta.strInstagram}</p>
    </div>
  );
}

export default CardAtleta;