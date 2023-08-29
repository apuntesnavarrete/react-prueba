import React, { useEffect, useState } from 'react';
import axios from 'axios';


function cards() {
  const [pokemonData, setPokemonData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonData(response.data.results);


      //nesecitamos que cada pokemon haga una peticion axion api //map y axios
      //el map se lo aplicamos donde esta nuestro array response.data.results(sin async)
     
      //como una peticion debe ser asyncrona
     

      //intentamos imprimir la respuesta

      //el scope no nos dejara sacar la variable para manipularla

      //lo metemos en una const function con return

      //retornamos solo el 2do response

      //imprimimos pero vemos solo promesas

      //resolvemos las promesas e imprimimos en consola

      //desde el return podemos ir ingresando a cada data

      //sacamos 2 datos y las guaradamos en un objeto

      //reescribimos la variable para evitar usar un 2do ustate

   const newpokemons = response.data.results.map( async (pokemonId) => {
 
    const responsev2 = await axios.get(pokemonId.url);
   
    

 //   console.log(responsev2) 


       // return responsev2.data.sprites.front_default 
          //responsev2
         
        return{
          name : responsev2.data.name ,
          img : responsev2.data.sprites.front_default
        }

      })

     // console.log(newpokemons)
     // setPokemonData(responsev2) ///puedo intentarlo directamente con responsv2 setPokemonData(responsev2)
 //  console.log(await Promise.all(newpokemons))
   console.log(await Promise.all(newpokemons))

   setPokemonData(await Promise.all(newpokemons))

    };

    fetchData();
  }, []);

  return (
    <div className="App">

      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemonData.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}  url {pokemon.img}
          <img src={pokemon.img}></img>
          </li>
        ))}
      </ul>

    
    </div>
  );
}

export default cards;