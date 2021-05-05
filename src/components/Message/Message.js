import React from 'react';
import './Message.scss';

const Message = ({ type, children }) => {
  return <p className={`message ${type}`}>{children}</p>;
};

Message.defaultProps = {
  type: 'info',
};

export default Message;
