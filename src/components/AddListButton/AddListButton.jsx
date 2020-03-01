import React from 'react'

import './AddListButton.scss';

export default function AddListButton({ handleClick }) {
  return (
    <button className="button" onClick={() => handleClick()}>Add</button>
  )
}
