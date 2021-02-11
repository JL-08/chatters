import React, { Component } from 'react';
import './MessageInput.css';

export class MessageInput extends Component {
  render() {
    return (
      <div className='input-container'>
        <div className='input-wrapper'>
          <input
            type='text'
            className='text-input'
            placeholder='Message goes here...'
          />
          <button className='btn-send'>Send</button>
        </div>
      </div>
    );
  }
}

export default MessageInput;
