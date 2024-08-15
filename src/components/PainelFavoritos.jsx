import React from "react";
import CardAtleta from "./CardAtleta";
import './PainelFavoritos.css';

function PainelFavoritos({ favoritos, onRemoverFavorito }) {
  return (
    <div className="painel-favoritos">
      <h2>Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Nenhum atleta favorito adicionado.</p>
      ) : (
        <div className="favoritos-container">
          {favoritos.map(atleta => (
            <div key={atleta.idPlayer} className="card-container">
              <CardAtleta 
                atleta={atleta} 
                onFavoritar={onRemoverFavorito} 
                isFavorito={true} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PainelFavoritos;
