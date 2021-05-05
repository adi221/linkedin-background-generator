import {
  PRODUCT_SETTINGS_SEARCH,
  UPDATE_FILTERED_ICONS,
  UPDATE_BG_COLOR,
} from '../constants';

export const updateBgColor = payload => ({ type: UPDATE_BG_COLOR, payload });

export const updateSearchQuery = query => (dispatch, getState) => {
  dispatch({ type: PRODUCT_SETTINGS_SEARCH, payload: query });
  const {
    product: { allIcons },
  } = getState();
  if (query === '') {
    return dispatch({ type: UPDATE_FILTERED_ICONS, payload: allIcons });
  }
  const newFilteredIcons = allIcons.filter(icon => icon.name.startsWith(query));
  dispatch({ type: UPDATE_FILTERED_ICONS, payload: newFilteredIcons });
};
