import React from 'react'

import './AddListButton.scss';

export default function AddListButton({listName, addList}) {
  return (
    <button className="button" onClick={() => addList(listName)}>Add</button>
  )
}
