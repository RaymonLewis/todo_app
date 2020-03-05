import React from 'react';
import './TaskActionButton.scss';

export default function TaskActionButton({ type, method, taskDecription }) {
  const onClick = () => {
    switch(type){
      case 'hideInputButton':
        method();
        break;
      default:
        method(taskDecription);
        break;
    }
  }

  return (
    <button 
    className={`tasks-actions-buttons__${type}`}
    onClick={onClick}
    >
      <span>{type === 'hideInputButton' ? "Cancel" : "New Task"}</span>
    </button>
  )
}
