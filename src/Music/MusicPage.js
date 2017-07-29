import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as playerDuck from 'reduxDuck/player.duck';

import './styles/music.css';

import {
    Music,
    Player,
    PlayerButton
} from './components';

class MusicPage extends Component {
    static propTypes = {
        PlayerActions: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.togglePlayButton = this.togglePlayButton.bind(this);
        this.leaveTo = this.leaveTo.bind(this);
        this.onYoutubeReady = this.onYoutubeReady.bind(this);
    }

    togglePlayButton() {
        console.log(this.props);
        if(this.props.playing) {
            this.props.PlayerActions.musicStop();
            this.props.player.pauseVideo();
        } else {

            this.props.PlayerActions.musicPlay();
            this.props.player.playVideo();
        }
    }

    leaveTo() {
        this.props.history.push('/main');
        this.props.PlayerActions.musicStop();
    }

    onYoutubeReady(player) {
        const { PlayerActions } = this.props;
        PlayerActions.musicInit({
            value: player.target
        });
    }

    render() {
        const { togglePlayButton, leaveTo, onYoutubeReady } = this;
        return (
            <Music>
                <div className="exit" onClick={leaveTo}>
                    뒤로가기
                </div>
                <Player playing={this.props.playing} onInit={onYoutubeReady} />
                <PlayerButton
                    playing={this.props.playing}
                    togglePlayButton={togglePlayButton}
                />
            </Music>
        );
    }
}


export default connect(
    state => ({
        playing: state.player.get('playing'),
        player: state.player.get('player')
    }),
    dispatch => ({
        PlayerActions: bindActionCreators(playerDuck, dispatch)
    })
)(MusicPage);