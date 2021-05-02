import { useState } from 'react';
import Axios from 'axios';

function Update() {
  
  const [update, setUpdate] = useState("");

  function searching() {

    Axios.patch('https://localhost:45030/movies/' + update)
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
    <div classname="Update">
        <h1>Update any movie by Year</h1>
      <input type="text" onChange={(event) => {
        setUpdate(event.target.value);
      }} />
      <button onClick={() => searching()}>Update</button>
    </div>
  );
}

export default Update;