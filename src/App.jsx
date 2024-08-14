import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PesquisaAtleta from './components/PesquisaAtleta'
import CardAtleta from './components/CardAtleta'

function App() {
  const [resultados, setResultados] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);

  return (
    <div>
      <PesquisaAtleta onResultados={setResultados} onSearchExecuted={() => setIsSearchExecuted(true)} />
      <div className="resultados">
        {isSearchExecuted && resultados.length === 0 ? (
          <p className="semResultados">Nenhum jogador encontrado.</p>
        ) : (
          resultados.map((atleta, index) => (
            <CardAtleta key={index} atleta={atleta} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
