import {
  ADD_ICON_TO_PRODUCT,
  SET_ALERT,
  SET_ICONS,
  GET_ALL_ICONS_REQUEST,
  GET_ALL_ICONS_SUCCESS,
  GET_ALL_ICONS_FAIL,
} from '../constants';

export const saveNewIcons = payload => ({
  type: SET_ICONS,
  payload,
});

export const setAlert = payload => ({ type: SET_ALERT, payload });

export const getAllIcons = url => async dispatch => {
  try {
    dispatch({ type: GET_ALL_ICONS_REQUEST });
    const res = await fetch(url);
    const { icons } = await res.json();
    console.log(icons);

    let newIcons = icons.map(icon => {
      const { id, name } = icon.properties;
      return { id, name };
    });

    dispatch({ type: GET_ALL_ICONS_SUCCESS, payload: newIcons });
  } catch (error) {
    dispatch({ type: GET_ALL_ICONS_FAIL, payload: error.message });
  }
};

export const addIconToProduct = icon => (dispatch, getState) => {
  const { id, name } = icon;
  const {
    product: { productIcons },
  } = getState();

  if (productIcons.length === 5) {
    dispatch(
      setAlert({
        show: true,
        msg:
          'Until 5 Icons. You can delete and reorder icons with Drag & Drop.',
      })
    );
    return;
  }

  const isIconExists = productIcons.find(icon => icon.id === id);
  if (isIconExists) {
    dispatch(setAlert({ show: true, msg: 'Icon was already selected' }));
  } else {
    const curIcon = { id, name };
    curIcon.order = productIcons.length;
    dispatch({ type: ADD_ICON_TO_PRODUCT, payload: curIcon });
  }
};
