import React, {useState} from 'react';
import './myStyle2.css';
function ThePowerofNine() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  return (
    <div>
    <input type="text"/>
      <button>Submit</button>
      <h3>Yes: {yes}</h3>
      <h3>No: {no}</h3>
    </div>
  );
}

export default ThePowerofNine;