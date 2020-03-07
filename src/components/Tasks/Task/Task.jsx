import React, {useState} from 'react';
import classNames from 'classnames';
import RemoveButton from '../../RemoveButton/RemoveButton';

import './Task.scss';

export default function Task({ task, onTaskRemove}) {
  const {text,completed,id} = task;
  const [taskDescription, setTaskDescription] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

  const updateTaskDescription = (e) => {
    const newDescription = e.target.value;
    setTaskDescription(newDescription);
  }
  
  const className = classNames({
    'tasks-list__checkbox': true,
    'tasks-list__checkbox--completed': isCompleted
  });  

  return (
    <li className="tasks-list__item">
      <button className={className} onClick={() => setIsCompleted(!isCompleted)}>
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <input className={'tasks-list__input'}
      type="text" 
      value={taskDescription}
      onChange={(e) => updateTaskDescription(e)}
      />
      <RemoveButton taskID={id} removeTask={onTaskRemove} parent='task' />
    </li>
  )
}