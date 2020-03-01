import React from 'react'

import './TextInput.scss';

export default function TextInput({handleInput,listName}) {
  const handleChange = (e) => {
    const value = e.target.value;
    handleInput(value);
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
