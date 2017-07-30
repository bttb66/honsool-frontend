import React from 'react';

function BeerPhoto(props) {
    console.log(props);
    const photoUrl = require('img/' + props.beerUrl);
    if(props.beerInfo) {
        return (
            <img
                src={photoUrl}
                className="beer-image"
                alt={props.beerInfo.name}
            />
        );
    } else {
        return (
            <img
                src={photoUrl}
                className="beer-image"
                alt="밀러"
            />
        );
    }

}

export default BeerPhoto;