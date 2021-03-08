import React, {useState} from 'react';
function ThePowerofNine() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  return (
    <div>
      <p>This is a guessing game. The person who gets 9 No's loses. Guess this Marvel Character.
      He wears a red suit. He is an X-Men. He carries two swords with him on his back. Who is he?</p>
    <input type="text"/>
      <button>Submit</button>
      <h3>Yes: {yes}</h3>
      <h3>No: {no}</h3>
    </div>
  );
}

export default ThePowerofNine;