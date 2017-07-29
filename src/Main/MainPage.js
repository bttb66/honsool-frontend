import React, { Component } from 'react';
import {
    BeerRecommend,
    BeerTitle,
    BeerPhoto,
    BeerContents,
    MusicButton
} from './components';

import './styles/main.css';

class MainPage extends Component {
    render() {
        return (
            <BeerRecommend>
                <BeerTitle />
                <BeerPhoto />
                <BeerContents />
                <MusicButton />
            </BeerRecommend>
        );
    }
}

export default MainPage;