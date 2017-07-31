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

        console.log(this.props.videoId);
        const videoId = this.props.videoId.toJS();

        const a = videoId[1].url.split('be');
        const finalId = a[1].split('/');
        return (
            <div className="youtube-wrapper">
                <Youtube
                    videoId={finalId[1] || 'Ckyt1vUOwic'}                  // defaults -> null
                    opts={opts}                        // defaults -> {}
                    onReady={this.props.onInit} 
                />
            </div>
        );
    }
}

export default Player;