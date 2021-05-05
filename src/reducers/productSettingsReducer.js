import {
  PRODUCT_SETTINGS_UPDATE,
  PRODUCT_SETTINGS_IS_COLOR,
  PRODUCT_SETTINGS_SEARCH,
  UPDATE_BG_COLOR,
} from '../constants';

const initialState = {
  size: {
    name: 'size',
    title: 'Icon size',
    currentVal: 45,
    minVal: 35,
    maxVal: 55,
  },
  space: {
    name: 'space',
    title: 'Space between icons',
    currentVal: 10,
    minVal: 7,
    maxVal: 13,
  },
  showColoredIcons: true,
  searchQuery: '',
  bgColor: '#434255',
};

export const productSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SETTINGS_UPDATE:
      const { name, value } = action.payload;
      return { ...state, [name]: { ...state[name], currentVal: value } };
    case PRODUCT_SETTINGS_IS_COLOR:
      return { ...state, showColoredIcons: action.payload };
    case PRODUCT_SETTINGS_SEARCH:
      return { ...state, searchQuery: action.payload };
    case UPDATE_BG_COLOR:
      return { ...state, bgColor: action.payload };
    default:
      return { ...state };
  }
};
