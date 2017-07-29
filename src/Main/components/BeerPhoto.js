import React from 'react';

function BeerPhoto() {
    return (
        <img
            src={require('img/miller.jpg')}
            className="beer-image"
            alt="밀러"
        />
    );
}

export default BeerPhoto;