import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cards from './Cards';
import Card from './Card';
import Ejemplo from './Ejemplo';
import WeatherComponent from './Clima'

function App() {
  return (
    <Router>
      <div>
        <h1>Aplicación React</h1>
        <ul>
          <li><Link to="/ejemplo/123">Ir a Ejemplo con variable 123</Link></li>
          <li><Link to="/ejemplo/456">Ir a Ejemplo con variable 456</Link></li>
          <li><Link to="/card/charizard">Ir a Ejemplo con variable charizard</Link></li>
          <li><Link to="/card/charmander">Ir a Ejemplo con variable charmander</Link></li>

        </ul>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/clima" element={<WeatherComponent></WeatherComponent>} />

          <Route path="/card/:variable" element={<Card />} />
          <Route path="/ejemplo/:variable" element={<Ejemplo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//crear un codigo mas simple sin el try catch

//manipular para imprimir la data en una variable.

//estilizar las cards

//mover toda esta pagina a un componente

//usar routerDom

//npm install react-router-dom









