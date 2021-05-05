import React from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsTitle } from '../../components';
import { updateSearchQuery } from '../../actions/productSettingsActions';

const SearchBar = () => {
  const { searchQuery } = useSelector(state => state.productSettings);
  const dispatch = useDispatch();

  const changeHandler = e => dispatch(updateSearchQuery(e.target.value));

  return (
    <div className='searchbar'>
      {/* <h5>Search icon</h5> */}
      <SettingsTitle text='Search icon' />
      <input
        type='text'
        className='searchbar__input'
        value={searchQuery}
        onChange={changeHandler}
        placeholder='Search..'
      />
    </div>
  );
};

export default SearchBar;
