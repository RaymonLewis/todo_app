import React, { useState } from 'react'
import ClosePopupButton from './ClosePopupButton/ClosePopupButton';
import ColorsPallete from '../ColorsPallete/ColorsPallete';
import AddListButton from '../AddListButton/AddListButton';
import TextInput from '../TextInput/TextInput';

export default function Popup({ hidePopup, colors, addList }) {
  const [listName,setListName] = useState('');
  const [listColorID, setListColorID] = useState(colors[0].id);

  const closePopup = () => {
    setListName('');
    setListColorID(colors[0].id);
    hidePopup();
  };

  const handleInput = (listName) => {
    setListName(listName);
  };

  const chooseColor = (colorID) => {
    setListColorID(colorID);
  };

  const handleClick = () => {
    if(!listName){
      alert('Enter the list name');
      return;
    }
    //adding list to data array
    addList(listName,listColorID);
    closePopup();
  };
  
  return (
    <div className="add-list__popup">
      <TextInput handleInput={handleInput} listName={listName}/>
      <ClosePopupButton hidePopup={hidePopup} />
      <ColorsPallete colors={colors} listColorID={listColorID} sendColorToPopup={chooseColor}/>
      <AddListButton handleClick={handleClick} />
    </div>
  )
}
