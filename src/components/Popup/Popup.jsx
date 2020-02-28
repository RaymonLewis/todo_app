import React from 'react'
import ClosePopupButton from './ClosePopupButton/ClosePopupButton';
import ColorsPallete from '../ColorsPallete/ColorsPallete';
import AddListButton from '../AddListButton/AddListButton';
import TextInput from '../TextInput/TextInput';

export default function Popup({ hidePopup, colors, setListColor }) {
  return (
    <div className="add-list__popup">
      <TextInput />
      <ClosePopupButton hidePopup={hidePopup} />
      <ColorsPallete colors={colors} />
      <AddListButton />
    </div>
  )
}
