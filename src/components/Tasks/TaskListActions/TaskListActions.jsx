import React, { useState  } from 'react'
import NewTaskButton from '../NewTaskButton/NewTaskButton';
import TextInput from '../../TextInput/TextInput';
import TaskActionButton from '../TaskActionButton/TaskActionButton';

export default function TaskListActions({ onAddTask }) {
  const [inputVisible,setInputVisible] = useState(false);
  const [taskDecription, setTaskDescription] = useState('');
  
  const showInput = () => {
    setInputVisible(true);
  };

  const hideInput = () => {
    setInputVisible(false);
  };

  const handleInput = (text) => {
    setTaskDescription(text);
  }

  return (
    <>
      {inputVisible && (
        <>
          <TextInput taskDescription={taskDecription} size="big" handleInput={handleInput} />
          <div className="tasks-actions-buttons">
            <TaskActionButton type='addTaskButton' method={onAddTask} taskDecription={taskDecription}/>
            <TaskActionButton type='hideInputButton' method={hideInput} />
          </div>
        </>
      )}
      {!inputVisible && <NewTaskButton showInput={showInput} />}
    </>
  )
}
