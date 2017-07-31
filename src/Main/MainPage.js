import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    BeerRecommend,
    BeerTitle,
    BeerPhoto,
    BeerContents,
    MusicButton
} from './components';

import * as datas from 'reduxDuck/photo.duck';

import './styles/main.css';

class MainPage extends Component {

    render() {
        console.log(this.props.beerInfo);
        let beerName;
        if(this.props.beerInfo && this.props.beerInfo.size > 0) {
            console.log(this.props.beerInfo.get('name'));
        }

        return (
            <BeerRecommend>
                <div className="photo-wrapper">
                    <BeerTitle {...this.props} />
                    <BeerPhoto {...this.props}
                        beerUrl={this.props.beerInfo ? `${this.props.beerInfo.name}.png` : '카스.png'}
                    />
                </div>
                <BeerContents {...this.props} />
                <MusicButton />
            </BeerRecommend>
        );
    }
}

export default connect(
    state => ({
        beerInfo: state.photo.get('beerInfo'),
        message: state.photo.get('isFace'),
        musicList: state.photo.get('musicList')
    }),
    null
)(MainPage);
