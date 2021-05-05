import {
  GET_ALL_ICONS_REQUEST,
  GET_ALL_ICONS_SUCCESS,
  GET_ALL_ICONS_FAIL,
  ADD_ICON_TO_PRODUCT,
  SET_ICONS,
  LIST_UPLOADED_ICONS,
  UPDATE_FILTERED_ICONS,
} from '../constants';

const uploadedIconsFromStorage = localStorage.getItem('uploadedIcons')
  ? JSON.parse(localStorage.getItem('uploadedIcons'))
  : [];

export const productReducer = (
  state = {
    productIcons: [],
    allIcons: [...uploadedIconsFromStorage],
    filteredIcons: [...uploadedIconsFromStorage],
    loading: false,
    error: false,
    uploadedIcons: uploadedIconsFromStorage,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_ICONS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_ICONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        allIcons: action.payload,
        filteredIcons: action.payload,
      };
    case GET_ALL_ICONS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_ICON_TO_PRODUCT:
      return {
        ...state,
        productIcons: [...state.productIcons, action.payload],
      };
    case SET_ICONS:
      return { ...state, productIcons: action.payload };
    case LIST_UPLOADED_ICONS:
      return {
        ...state,
        uploadedIcons: [...state.uploadedIcons, action.payload],
        allIcons: [...state.allIcons, action.payload],
      };
    case UPDATE_FILTERED_ICONS:
      return { ...state, filteredIcons: action.payload };
    default:
      return { ...state };
  }
};
