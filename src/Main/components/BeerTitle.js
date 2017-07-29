import React from 'react';

function BeerTitle() {
    return (
        <div className="beer-title">
            <p>당신을 위한 맥주를 추천해드립니다.</p>
            <hr style={{width: '100px', borderTop: 0, borderBottom: '1px solid rgba(213, 213, 213, 0.5)', marginBottom: 50}} />
            <div className="sub-title">
                <p>오늘의 기분이 좋으시군요.</p>
                <p>오늘 기분에 맞춰 깔끔한</p>
                <p>밀러를 추천드려요</p>
            </div>
        </div>
    );
}

export default BeerTitle;