import React, { useState } from 'react'
import ClosePopupButton from './ClosePopupButton/ClosePopupButton';
import ColorsPallete from '../ColorsPallete/ColorsPallete';
import AddListButton from '../AddListButton/AddListButton';
import TextInput from '../TextInput/TextInput';

export default function Popup({ hidePopup, colors, setListColor, addList }) {
  const [listName,setListName] = useState('');

  function handleInput(e) {
    const name = e.target.value;
    setListName(name);
  }

  return (
    <div className="add-list__popup">
      <TextInput handleInput={handleInput}/>
      <ClosePopupButton hidePopup={hidePopup} />
      <ColorsPallete colors={colors} />
      <AddListButton listName={listName} addList={addList} />
    </div>
  )
}
