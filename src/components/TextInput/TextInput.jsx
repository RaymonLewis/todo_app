import React from 'react'

import './TextInput.scss';

export default function TextInput({handleInput,listName}) {

  function handleChange(e){
    handleInput(e.target.value);
  }

  return (
      <input 
      className="field" 
      type="text" 
      placeholder="Folder Name"
      value={listName} 
      onChange={handleChange}/>
  )
}
