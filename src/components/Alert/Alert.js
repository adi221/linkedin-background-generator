import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Alert.scss';
import { SET_ALERT } from '../../constants';

const Alert = () => {
  const dispatch = useDispatch();

  const {
    alert: { show, msg },
  } = useSelector(state => state.alert);

  useEffect(() => {
    const timeout = setTimeout(
      () => dispatch({ type: SET_ALERT, payload: { show: false, msg: '' } }),
      2000
    );
    return () => clearTimeout(timeout);
  });

  if (!show) return null;

  return (
    <div className='alerts'>
      <div className='alerts__alert'>{msg}</div>
    </div>
  );
};

export default Alert;
