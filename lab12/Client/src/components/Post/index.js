import { useState } from 'react';
import Axios from 'axios';

function Post() {
  
  const [post, setPost] = useState("");

  function searching() {

    Axios.get('https://localhost:45030/books/' + post)
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
    <div classname="Post">
        <h1>Search for books by Author</h1>
      <input type="text" onChange={(event) => {
        setPost(event.target.value);
      }} />
      <button onClick={() => searching()}>Search</button>
    </div>
  );
}

export default Post;