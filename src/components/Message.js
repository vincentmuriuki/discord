import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/Message.css';

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message__info'>
          <h4>Faith
              <span className="message__timestamp">timestamp</span>
          </h4>
          <p>Sample message</p>
      </div>
    </div>
  );
}

export default Message;
