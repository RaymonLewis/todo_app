import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badje';

import "./list.scss";
//redone the removable logic using scss. We can just do not show the delete button for the 1st element
const List = ({ items, isRemovable, onClick, marginRemoved }) => {
  const listItem = items.map(({ icon, name, colorId, isActive, className}, i) => 
        <li key = {i} className={classNames({'active' : isActive}, className)}>
          <i>{icon ? icon : <Badge colorID={colorId} />}</i>
          <span>{name}</span>
        </li> 
  );
  const listClass = classNames({
    'todo__list': true,
    'todo__list--margin--removed' : marginRemoved
  });
  return(
    <ul onClick= {onClick} className={listClass}>
      {listItem}
    </ul>  
  );
}

export default List;