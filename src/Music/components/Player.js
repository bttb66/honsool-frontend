import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const opts = {
            height: '40',
            width: '40',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <div className="youtube-wrapper">
                <Youtube
                    videoId={'9pdj4iJD08s'}                  // defaults -> null
                    opts={opts}                        // defaults -> {}
                    onReady={this.props.onInit} 
                />
            </div>
        );
    }
}

export default Player;