import React from 'react';
import './CheckboxInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsTitle } from '../../components';
import { PRODUCT_SETTINGS_IS_COLOR } from '../../constants';

const CheckboxInput = () => {
  const dispatch = useDispatch();

  const { showColoredIcons } = useSelector(state => state.productSettings);

  const changeHandler = e => {
    dispatch({ type: PRODUCT_SETTINGS_IS_COLOR, payload: e.target.checked });
  };

  return (
    <div className='checkbox'>
      <SettingsTitle text='Icon color' />
      <div className='checkbox__container'>
        <input
          type='checkbox'
          id='checkbox'
          className='checkbox__input'
          checked={showColoredIcons}
          onChange={changeHandler}
        />
        <label htmlFor='checkbox'>Colored Icons</label>
      </div>
    </div>
  );
};

export default CheckboxInput;
