import { useState } from 'react';
import Axios from 'axios';

function Search() {
  
  const [search, setSearch] = useState("");

  const [pokemon, setPokemon] = useState({});

  const [loading, setLoading] = useState(true);

  function searchMonsters() {

    Axios('https://pokeapi.co/api/v2/pokemon/' + search)
    // And then...
    .then(function (response) {
        // Use the 'data'
        setPokemon(response.data);

        setLoading(false);
    })
    .catch(function (error) {
        // handle error
        console.log("Not found!");
    });
  }
  
  return (
    <div classname="Search">
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search</button>
      {
        <p>Searched: {search}</p>
      }
      {
        (loading === true) ? (
          <p>Loading...</p>
        ) : (
          <div>
          <h2>
            {pokemon.name}
          </h2>
          <p>
            {pokemon.id}
          </p>
          <img src = {pokemon.sprites.front_default} />
        </div>
        )
      }
    </div>
  );
}

export default Search;