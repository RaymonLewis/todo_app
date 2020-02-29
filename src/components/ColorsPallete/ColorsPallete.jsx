import React from 'react'
import Badje from '../Badge/Badje';

import './ColorsPallete.scss';

export default function ColorsPallete({ colors,listColorID, sendColorToPopup}) {
  

  function handleClick(id){
    sendColorToPopup(id);
  }

  const colorsPallete = colors.map((color) => {
    const {hex,id} = color;
    return(
      <li key={`${hex}`} onClick={() => handleClick(id)}>
        <Badje 
        colorID={id} 
        size= 'big' 
        isActive= {listColorID === id ? true : false} />
      </li>
    );
  }); 
  return (
    <div className="add-list_popup-colors">
      <ul>
        {colorsPallete}
      </ul>
  </div>
  )
}
