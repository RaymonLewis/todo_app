import React from 'react'

import './TextInput.scss';

export default function TextInput({handleInput}) {
  return (
      <input 
      className="field" 
      type="text" 
      placeholder="Folder Name" 
      onChange={handleInput}/>
  )
}
