import React from 'react'

import './AddListButton.scss';

export default function AddListButton({listName, colorID, addList}) {
  return (
    <button className="button" onClick={() => addList(listName,colorID)}>Add</button>
  )
}
