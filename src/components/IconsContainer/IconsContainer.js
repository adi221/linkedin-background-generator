import React, { useEffect } from 'react';
import './IconsContainer.scss';
import { SingleIcon, Loader, Message } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIcons } from '../../actions/productActions';

const IconsContainer = () => {
  const { filteredIcons, loading, error } = useSelector(state => state.product);
  const { searchQuery } = useSelector(state => state.productSettings);
  const dispatch = useDispatch();
  const deviconsUrl =
    'https://raw.githubusercontent.com/devicons/devicon/master/icomoon.json';

  useEffect(() => {
    dispatch(getAllIcons(deviconsUrl));
  }, [dispatch]);

  return (
    <div className='icons-container'>
      {loading && <Loader />}
      {error && (
        <Message type='danger'>Unexpected error, please try again</Message>
      )}
      {filteredIcons.length === 0 && searchQuery && (
        <Message type='info'>No search results for {searchQuery}</Message>
      )}
      {filteredIcons.map(icon => {
        return <SingleIcon key={icon.id} {...icon} />;
      })}
    </div>
  );
};

export default IconsContainer;
