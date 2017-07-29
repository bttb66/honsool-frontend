import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MessageList, Chat, ChatHeader, ChatInput } from './components';
import io from 'socket.io-client';

import * as chat from 'reduxDuck/chat.duck';
import * as form from 'reduxDuck/form.duck';

import './styles/chat.css';

const socket = io.connect('http://52.79.153.112:3000', {
    path: '/room'
});

class ChatPage extends Component {
    constructor(props) {
        super(props);
        
        this.socketInit = this.socketInit.bind(this);
    }
    componentDidMount() {
        const { ChatActions } = this.props;
        socket.on('getChat', (data) => {
            console.log(typeof data);
            ChatActions.getMessage({
                value: data
            });
        });
    }

    socketInit() {
        // socket.emit('room join', {room: this.props.room.title});
    }

    render() {
        return (
            <Chat>
                <ChatHeader />
                <MessageList {...this.props} />
                <ChatInput {...this.props} socket={socket} />
            </Chat>
        );
    }
}

export default connect(
    state => ({
        message: state.chat.get('message'),
        form: state.form.get('chat')
    }),
    dispatch => ({
        ChatActions: bindActionCreators(chat, dispatch),
        FormActions: bindActionCreators(form, dispatch)
    })
)(ChatPage);