import React from 'react';
import Task from '../Task/Task';

import './TaskList.scss';

export default function TaskList({ taskList, onTaskRemove }) {
  const currentTasks = taskList.map(task => 
    <Task task={task} key={task.id} onTaskRemove={onTaskRemove}/>
  );

  return (
    <ul className="task-list">
      {taskList.length === 0 &&
        <span className="task-list__no-task-text">No tasks yet</span>
      }
      {currentTasks}
    </ul>
  )
}
