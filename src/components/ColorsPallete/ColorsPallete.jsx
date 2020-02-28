import React, { useState } from 'react'
import Badje from '../Badge/Badje';

import './ColorsPallete.scss';

export default function ColorsPallete({ colors }) {
  const [listColor, setListColor] = useState(colors[0].id);

  const colorsPallete = colors.map((color) => {
    const {name,hex,id} = color;
    return(
      <li key={`${hex}`} onClick={() => setListColor(id)}>
        <Badje 
        color={name} 
        size= 'big' 
        isActive= {listColor === id ? true : false} />
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
