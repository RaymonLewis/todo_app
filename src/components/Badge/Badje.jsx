import React from 'react';
import classNames from 'classnames';
import colorName from '../../utilities/colorName';

import './badge.scss';

export default function Badje({ colorID, size, isActive }) {
  const color = colorName(colorID);
  const badgeClass = classNames({
    'badge': true,
    [`badge--color-${color}`]: color,
    [`badge--size-${size}`]: size,
    'badge--margin-removed': true,
    'badge--active': isActive
  });
  return (
    <span className={badgeClass}> </span>
  );
}
