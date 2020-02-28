import React from 'react';
import classNames from 'classnames';

import './badge.scss';

export default function Badje({ color, size, isActive }) {
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
