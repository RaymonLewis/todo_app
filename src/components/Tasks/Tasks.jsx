import React, {useState} from 'react'
import TasksHeader from './TasksHeader/TasksHeader';
import TaskList from './TaskList/TaskList';
import TaskListActions from './TaskListActions/TaskListActions';
import {lists,tasks,colors} from '../../assets/db.json';

import './Tasks.scss';

export default function Tasks(props) {  
  const [taskList, setTaskList] = useState(tasks);

  const onTaskRemove = (taskID) => {
    if(window.confirm('Do you want to remove the task?')) {
      const updatedList = taskList.filter(task => task.id !== taskID);
      setTaskList(updatedList);
    }
      return;
  };

  const onAddTask = (taskDescription) => {
    const newTask = {
      "listId": listID,
      "text": taskDescription,
      "completed": false,
      "id": '112102'
    };

    let newTaskList = [...taskList];
    newTaskList.push(newTask);
    setTaskList(newTaskList);
    
    console.log('Task was added', newTask);
  }
  
  // Need to move it in a separate service
  //Looking for the listName and color Name to provide the data below for child components
  const listID = Number(props.match.params.id)+1;
  const list = lists.filter(list => list.id === listID);
  const listName = list[0].name;

  const colorID = list[0].colorId;
  const colorArray = colors.filter(color => color.id === colorID);
  const colorName = colorArray[0].name;
  
  // Retrieve tasks belong to the selected list and display each of them
  const taskArray = taskList.filter(task => task.listId === listID);
  return (
    <>
      <TasksHeader listName={listName} color={colorName}/>
      <div className="tasks-content">
        <div className="tasks-content__inner">
          <TaskList taskList={taskArray} onTaskRemove={onTaskRemove} />
          <div className="tasks-actions">
            <TaskListActions onAddTask={onAddTask}/>
          </div>
        </div>
      </div>
    </>
  )
}
