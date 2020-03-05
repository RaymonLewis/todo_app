import React from 'react'
import classNames from 'classnames';
import editSVG from '../../../assets/img/edit.svg';

import './TasksHeader.scss';

export default function TasksHeader({ listName, color }) {
  const className = classNames({
    'tasks-header__name': true,
    [`tasks-header__name--${color}`]: color
  })
  return (
    <div className="tasks-header">
      <span className={className}>{listName}</span>
      <img src={editSVG} alt='Edit Icon' className="tasks-header__edit-icon" />
    </div>
  )
}