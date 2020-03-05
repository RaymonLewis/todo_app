import React from 'react'

import './TextInput.scss';

export default function TextInput({ handleInput,listName, taskDescription, size }) {
  const onChangeInput = (e) => {
    const value = e.target.value;
    handleInput(value);
  }

  return (
      <input 
      className={!size ? 'field' : `field field_${size}`}
      type="text" 
      placeholder={listName ? "Folder Name" : "Enter Task Description"}
      value={listName ? listName : taskDescription} 
      onChange={onChangeInput}/>
  )
}
