import React, { Component} from 'react';
import Message from './Message';

function MessageList(props) {
    const messages = props.message.map((message, index) => {
        return ( <Message
                    key={message + index}
                    message={message}
                    beerUrl={props.name ? `${props.name}.png` : '카스.png'}
                    username={props.name ? `${props.name}` : '카스'}
                /> );
    });

    return (
        <div className="message-list-wrapper">
            {messages}
        </div>
    );
}

export default MessageList;