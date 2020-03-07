import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';
import editSVG from '../../../assets/img/edit.svg';

import './TasksHeader.scss';

export default function TasksHeader({ listName, color }) {
  const [description, setDescription] = useState(listName);
  const [isDisabled, setIsDisabled] = useState(true);

  const inputElement = useRef(null);
  
  useEffect(() => {
    setDescription(listName);
    setIsDisabled(true);
  }, [listName]); 

  const className = classNames({
    'tasks-header__name': true,
    [`tasks-header__name--${color}`]: color
  })

  const handleClick = () => {
    setIsDisabled(false);
    inputElement.current.focus();
  }

  return (
    <div className="tasks-header">
      <input 
      className={className} 
      value={description} 
      disabled={isDisabled}
      onChange={(e) => setDescription(e.target.value)}
      ref={inputElement}/>
      <img 
      src={editSVG} 
      alt='Edit Icon' 
      className="tasks-header__edit-icon" 
      onClick={handleClick}/>
    </div>
  )
}