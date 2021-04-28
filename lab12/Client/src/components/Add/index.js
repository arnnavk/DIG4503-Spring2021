import { useState } from 'react';
import Axios from 'axios';

function Add() {
  
  const [add, setAdd] = useState("");
  
  function adding() {

    Axios.put('https://localhost:45030/books/' + add)
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
    <div classname="Add">
        <h1>Add a book to the server by ISBN</h1>
      <input type="text" onChange={(event) => {
        setAdd(event.target.value);
      }} />
      <button onClick={() => adding()}>Add</button>
    </div>
  );
}

export default Add;