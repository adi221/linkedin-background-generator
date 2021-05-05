import React from 'react';
import { useDispatch } from 'react-redux';
import './RangeSlider.scss';
import { SettingsTitle } from '../../components';
import { PRODUCT_SETTINGS_UPDATE } from '../../constants';

const RangeSlider = ({ minVal, maxVal, currentVal, name, title }) => {
  const dispatch = useDispatch();

  const updateSettings = e => {
    let value = +e.target.value;
    dispatch({ type: PRODUCT_SETTINGS_UPDATE, payload: { value, name } });
  };

  return (
    <div className='range-slider'>
      <SettingsTitle text={title} />

      <div className='range-slider__container'>
        <input
          type='range'
          name={name}
          min={minVal}
          max={maxVal}
          value={currentVal}
          onChange={updateSettings}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
