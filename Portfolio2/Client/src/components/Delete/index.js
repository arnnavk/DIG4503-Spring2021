import { useState } from 'react';
import Axios from 'axios';

function Delete() {
  
  const [data, setData] = useState("");
  
  function deleting() {

    Axios.delete('https://localhost:45030/movies/' + data)
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
    <div classname="Delete">
        <h1>Delete a movie from the server by Year</h1>
      <input type="text" onChange={(event) => {
        setData(event.target.value);
      }} />
      <button onClick={() => deleting()}>Delete</button>
    </div>
  );
}

export default Delete;