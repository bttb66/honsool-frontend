import React, { Component} from 'react';
import Message from './Message';

function MessageList(props) {
    const messages = props.message.map((message, index) => {
        return ( <Message key={index} message={message} /> );
    });

    return (
        <div className="message-list-wrapper">
            {messages}
        </div>
    );
}

export default MessageList;