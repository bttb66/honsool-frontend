import React, { Component } from 'react';



class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerUrl: this.props.beerUrl || '카스.png'
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.message);
        console.log(nextProps.message);
        return this.props.messsage !== nextProps.message;
    }

    render() {
        console.log(this.state.beerUrl);
        return (
            <div className="message-container">
                <div className="pic-container">
                    <img src={require('img/' + this.state.beerUrl)} alt="프로필사진" className="profilePic" />
                    <div className="status"></div>
                </div>
                <h3 className="name">{this.props.username}</h3>
                <div className="message">
                    <p>{this.props.message}</p>
                </div>
                <div className="time"><span>{Date.now}</span></div>
            </div>
        );
    }
}

export default Message;