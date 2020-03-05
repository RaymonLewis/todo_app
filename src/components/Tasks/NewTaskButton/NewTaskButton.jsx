import React from 'react'
import addSVG from '../../../assets/img/add.svg';

import './NewTaskButton.scss';

export default function NewTaskButton({showInput}) {
  return (

    <button className="tasks-actions__new-task-btn" onClick={showInput}>
      <img src={addSVG} alt="Add Task"/>
      <span>New Task</span>
    </button>
  )
}
