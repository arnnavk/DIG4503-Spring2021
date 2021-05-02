import { useState } from 'react';
import Axios from 'axios';

function Search() {
  
  const [search, setSearch] = useState("");

  function searching() {

    Axios.get('https://localhost:45030/movies/' + search)
    // And then...
    .then(function (response) {
        // Use the 'data'
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Not found!");
    });
  }
  
  return (
    <div classname="Search">
        <h1>Search for a movie by Year</h1>
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searching()}>Search</button>
    </div>
  );
}

export default Search;