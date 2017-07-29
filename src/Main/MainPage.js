import React, { Component } from 'react';
import './styles/main.css';

class MainPage extends Component {

    render() {
        return (
            <div>
                메인 페이지 컨테이너입니다.
                <p>Capture Image: <input type="file" accept="image/*" id="capture" capture="camera"/> capture image </p>
            </div>
        );
    }
}

export default MainPage;
