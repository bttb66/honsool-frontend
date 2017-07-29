import React from 'react';
import AnJu from './AnJu';

function BeerContents() {
    return (
        <div className="beer-contents-wrapper">
            <h1 className="contents-pd">CASS FRESH</h1>
            <p className="contents-pd">옅은 단맛이 입맛을 돋우는 시원한 맥주</p>
            <p className="contents-pd hash-tag">#카스 프레시 #깔끔한맛 #기본</p>
            <hr className="hr-bar" />
            <div className="infos">
                <div className="info-title">맥주정보</div>
                <div className="info"><div className="left-text">도수</div><div className="right-num">4.7%</div></div>
                <div className="info"><div className="left-text">청량감</div><div className="right-bar-wrapper"><div style={{width: '20%'}} className="right-bar"></div></div></div>
                <div className="info"><div className="left-text">목넘김</div><div className="right-bar-wrapper"><div style={{width: '40%'}} className="right-bar"></div></div></div>
                <div className="info"><div className="left-text">향</div><div className="right-bar-wrapper"><div style={{width: '60%'}} className="right-bar"></div></div></div>
            </div>
            <hr className="hr-bar" />
            <p className="contents-pd anju-title">카스와 어울리는 안주</p>
            <AnJu />
        </div>
    );
}

export default BeerContents;