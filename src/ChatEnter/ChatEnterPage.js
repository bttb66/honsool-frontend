import React, { Component } from 'react';
import { 
    ChatEnter,
    ProfileImage,
    Nickname
} from './components';

class ChatEnterPage extends Component {
    render() {
        return (
            <ChatEnter>
                <ProfileImage />
                <Nickname />
            </ChatEnter>
        );
    }
}

export default ChatEnterPage;