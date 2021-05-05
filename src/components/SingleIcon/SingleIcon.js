import React from 'react';
import './SingleIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addIconToProduct } from '../../actions/productActions';

const SingleIcon = ({ id, name }) => {
  const dispatch = useDispatch();
  const { showColoredIcons } = useSelector(state => state.productSettings);

  return (
    <div
      className='single-icon'
      onClick={() => dispatch(addIconToProduct({ id, name }))}
    >
      <i
        className={`single-icon devicon-${name} ${
          showColoredIcons && 'colored'
        } `}
      ></i>
      <p>{name.split('-')[0]}</p>
    </div>
  );
};

export default SingleIcon;
