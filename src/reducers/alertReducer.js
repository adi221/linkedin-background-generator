import { SET_ALERT } from '../constants';

export const alertReducer = (
  state = { alert: { show: false, msg: '' } },
  action
) => {
  switch (action.type) {
    case SET_ALERT:
      const { show, msg } = action.payload;
      return { alert: { show, msg } };
    default:
      return state;
  }
};
