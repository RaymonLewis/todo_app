import React, {useState} from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import Badge from '../Badge/Badje';
import RemoveButton from '../RemoveButton/RemoveButton';

import "./list.scss";
//The list item must be moved to its own component
const List = ({ items, onClick, marginRemoved, onRemoveList }) => {
  const [active, setActive] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const selectList = (i) => {
    setSelectedList(i);
    setActive(true);
  }
  
  const listItem = items.map(({ icon, name, colorId }, i) => 
        <Link to={`/tasks/${i}`}>
          <li key = {i} 
          className={active && selectedList === i ? 'active' : ''}
          onClick={() => selectList(i)}
          >
            <i className="list_icon">{icon ? icon : <Badge colorID={colorId} />}</i>
            <span className="listName">{name}</span>
            {active && selectedList === i &&
              <RemoveButton 
              listName={name} 
              removeList={onRemoveList}
              parent='list'/>
            }
          </li> 
        </Link>
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