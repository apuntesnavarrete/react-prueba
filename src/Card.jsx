import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Card() {
  const { variable } = useParams();
  const [pokemonData, setPokemonData] = useState({}); // Cambio aquí: inicializa como objeto vacío

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${variable}`); // Cambio aquí: utiliza la variable dinámica
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [variable]); // Cambio aquí: agrega "variable" como dependencia

  return (
    <div className="App">
      <h1>Detalles del Pokémon</h1>
      <div>
        <p>Nombre: {pokemonData.name}</p>
        <p>Altura: {pokemonData.height}</p>
        <p>Peso: {pokemonData.weight}</p>
        <p>Experiencia base: {pokemonData.base_experience}</p>
        {/* Puedes mostrar más propiedades del Pokémon aquí */}
      </div>
    </div>
  );
}

export default Card;