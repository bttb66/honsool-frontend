import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ChatHeader extends Component {
    render() {
        return (
            <div className="chat-header-wrapper">
                <span>혼술하는 남녀 방 {this.props.userNumber}명 동시접속</span>
                <Link to ="/main" style={{float: "right", top: 10, bottom: 10}}>뒤로 가기</Link>
            </div>
        );
    }
}

export default ChatHeader;