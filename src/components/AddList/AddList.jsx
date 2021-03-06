import React, { useState } from 'react';
import List from '../List/List';
import Popup from '../Popup/Popup';

import './addList.scss';

const AddList = ({colors}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const hidePopup = () => {
    setVisiblePopup(false);
  }
  
  return(
    <div className="add-list">
      <List marginRemoved= {true} onClick= {() => setVisiblePopup(true)}
      items= {
        [
          {
            className: 'todo__list__add-button',
            icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            name: 'Add list'
          }
        ]}
      />
      {visiblePopup && <Popup colors={colors} hidePopup={hidePopup} /> }
    </div>
  );
}

export default AddList;
