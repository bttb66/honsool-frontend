import React from 'react';
import { Link } from 'react-router-dom';

function MusicButton() {
    return (
        <div className="button-wrapper center">
            <Link to="/music" className="btn">
                지금 이 순간 어울리는 음악
            </Link>
            <Link to="/chat" className="btn">
                혼맥 채팅방 입장
            </Link>
        </div>
    );
}

export default MusicButton;