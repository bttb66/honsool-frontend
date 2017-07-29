import React, { Component } from 'react';

class PlayerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="button">
                <div className="circle">
                    <div 
                        ref={(btn) => this.playBtn = btn}
                        onClick={this.props.togglePlayButton}
                        className={`shape ${this.props.playing ? 'stop' : 'play'}`}
                    >
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerButton;