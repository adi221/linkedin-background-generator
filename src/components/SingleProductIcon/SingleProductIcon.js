import React from 'react';
import './SingleProductIcon.scss';
import { useSelector } from 'react-redux';

const SingleProductIcon = ({
  name,
  id,
  handleDrag,
  handleDrop,
  handleDragOver,
  handleDragEnd,
  handleMouseEnter,
  isHovered,
}) => {
  const { size, space, showColoredIcons } = useSelector(
    state => state.productSettings
  );

  const iconStyles = {
    fontSize: `${size.currentVal}px`,
    marginLeft: `${space.currentVal}px`,
    marginRight: `${space.currentVal}px`,
  };

  return (
    <div
      className={`single-product-icon ${isHovered && 'shake'}`}
      draggable={true}
      id={id}
      onDragOver={handleDragOver}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleMouseEnter}
      style={iconStyles}
    >
      <i
        className={`single-product-icon devicon-${name} ${
          showColoredIcons && 'colored'
        } `}
      ></i>
    </div>
  );
};

export default SingleProductIcon;
