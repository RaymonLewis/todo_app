import React, { useState } from 'react'
import ClosePopupButton from './ClosePopupButton/ClosePopupButton';
import ColorsPallete from '../ColorsPallete/ColorsPallete';
import AddListButton from '../AddListButton/AddListButton';
import TextInput from '../TextInput/TextInput';

export default function Popup({ hidePopup, colors, addList }) {
  const [listName,setListName] = useState('');
  const [listColorID, setListColorID] = useState(colors[0].id);

  function handleInput(listName) {
    setListName(listName);
  }

  function chooseColor(colorID){
    setListColorID(colorID);
  }
  
  return (
    <div className="add-list__popup">
      <TextInput handleInput={handleInput} listName={listName}/>
      <ClosePopupButton hidePopup={hidePopup} />
      <ColorsPallete colors={colors} listColorID={listColorID} sendColorToPopup={chooseColor}/>
      <AddListButton listName={listName} colorID={listColorID} addList={addList} />
    </div>
  )
}
