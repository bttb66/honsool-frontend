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
            console.log(data);
            ChatActions.getMessage({
                value: data.msg,
                name: data.name
            });
        });
        socket.on('userNumber', (data) => {
            ChatActions.setUserNumber({
                value: data
            });
        });

        if(!this.props.valid) {
            this.props.history.push('/');
            alert("사진을 먼저 찍고 접속해주세요!");
        }
    }

    componentWillUnmount() {
        socket.disconnect();
    }

    socketInit() {
        // socket.emit('room join', {room: this.props.room.title});
    }

    render() {
        console.log(this.props);
        return (
            <Chat>
                <ChatHeader userNumber={this.props.userNumber} /> 
                <MessageList {...this.props} />
                <ChatInput {...this.props} socket={socket} />
            </Chat>
        );
    }
}

export default connect(
    state => ({
        valid: state.photo.get('valid'),
        message: state.chat.get('message'),
        name: state.chat.get('name'),
        userNumber: state.chat.get('userNumber'),
        form: state.form.get('chat'),
        beerInfo: state.photo.get('beerInfo')
    }),
    dispatch => ({
        ChatActions: bindActionCreators(chat, dispatch),
        FormActions: bindActionCreators(form, dispatch)
    })
)(ChatPage);