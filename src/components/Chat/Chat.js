import React, { Component } from 'react';
import './Chat.css';

export class Chat extends Component {
  render() {
    return (
      <div className='chat-container'>
        <div id='messages'>
          <div className='other-message'>
            <div className='other-inner-container'>
              <div className='other-message-container'>
                <p className='username'>John</p>
                <p className='text'>Other's message</p>
              </div>
              <span className='date'>4:11PM</span>
            </div>
          </div>
          <div className='align-right'>
            <div className='user-message'>
              <div className='user-inner-container'>
                <div className='user-message-container'>
                  <p className='username'>You</p>
                  <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span className='date'>4:11PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
