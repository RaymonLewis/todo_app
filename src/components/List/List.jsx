import React, {useState} from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badje';
import RemoveListButton from './RemoveListButton/RemoveListButton';

import "./list.scss";

const List = ({ items, onClick, marginRemoved, onRemoveList }) => {
  const [active, setActive] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const selectList = (i) => {
    setSelectedList(i);
    setActive(true);
  }
  
  const listItem = items.map(({ icon, name, colorId }, i) => 
        <li key = {i} 
        className={active && selectedList === i ? 'active' : ''}
        onClick={() => selectList(i)}>
          <i className="list_icon">{icon ? icon : <Badge colorID={colorId} />}</i>
          <span>{name}</span>
          {active && selectedList === i &&
            <RemoveListButton listName={name} removeList={onRemoveList}/>
          }
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