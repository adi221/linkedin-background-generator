import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.scss';
import { SingleProductIcon, Message } from '../../components';
import { saveNewIcons } from '../../actions/productActions';

const Product = ({ downloadRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dragId, setDragId] = useState(null);
  const [viewTrash, setViewTrash] = useState(false);

  const [showMessage, setShowMessage] = useState(false);
  const [messageShownOnce, setMessageShownOnce] = useState(false);

  const dispatch = useDispatch();
  const { productIcons } = useSelector(state => state.product);
  const { bgColor } = useSelector(state => state.productSettings);

  const handleDrag = e => {
    setViewTrash(true);
    setDragId(e.currentTarget.id);
  };

  const handleDrop = e => {
    setViewTrash(false);

    if (e.currentTarget.id === 'trash') {
      const newIcons = productIcons.filter(icon => icon.id !== +dragId);
      dispatch(saveNewIcons(newIcons));
      return;
    }

    const dragIcon = productIcons.find(icon => icon.id === +dragId);
    const dropIcon = productIcons.find(icon => icon.id === +e.currentTarget.id);

    const dragIconOrder = dragIcon.order;
    const dropIconOrder = dropIcon.order;

    const newIcons = productIcons.map(icon => {
      if (icon.id === +dragId) {
        icon.order = dropIconOrder;
      }
      if (icon.id === +e.currentTarget.id) {
        icon.order = dragIconOrder;
      }
      return icon;
    });

    dispatch(saveNewIcons(newIcons));
  };

  const handleDragOver = e => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragEnd = e => {
    e.preventDefault();
    setViewTrash(false);
  };

  const handleDragEnter = e => {
    setIsHovered(true);
  };

  const handleMouseEnter = e => {
    setIsHovered(true);
    if (!messageShownOnce) setShowMessage(true);
  };

  const handleDragLeave = e => {
    setTimeout(() => setIsHovered(false), 1000);
  };

  const lightenColor = (color, amount = 20) => {
    return (
      '#' +
      color
        .replace(/^#/, '')
        .replace(/../g, color =>
          (
            '0' +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
              16
            )
          ).substr(-2)
        )
    );
  };

  useEffect(() => {
    let timer;
    if (showMessage) {
      setMessageShownOnce(true);
      timer = setTimeout(() => setShowMessage(false), 1500);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <>
      {showMessage ? (
        <Message type='info'>
          Use Drap and Drop to Delete and Reorder Icons
        </Message>
      ) : null}
      <div className='product'>
        {viewTrash && (
          <button
            className='product__delete'
            id='trash'
            draggable={true}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <div className={`trash-box ${isHovered ? 'hovered' : ''}`}>
              <div className='trash-top'></div>
              <div className='trash-btm'>
                <div className='trash-lines'>
                  <div className='trash-line'></div>
                  <div className='trash-line'></div>
                </div>
              </div>
            </div>
          </button>
        )}

        <div
          className='product__banner'
          ref={downloadRef}
          id='banner'
          style={{
            background: `radial-gradient(${lightenColor(
              bgColor
            )} 5%, ${bgColor} 100%)`,
          }}
        >
          {productIcons.length > 0 ? (
            productIcons
              .sort((a, b) => a.order - b.order)
              .map(icon => {
                return (
                  <SingleProductIcon
                    key={icon.id}
                    {...icon}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    handleDragOver={handleDragOver}
                    handleDragEnd={handleDragEnd}
                    handleMouseEnter={handleMouseEnter}
                    isHovered={viewTrash || isHovered}
                  />
                );
              })
          ) : (
            <h3>Add Icons From The List :)</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
