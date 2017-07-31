import React from 'react';

function BeerTitle({message, beerInfo}) {
    console.log(message);
    if (message === '') {
        return (
            <div className="beer-title">
                <p>당신을 위한 맥주를 추천해드립니다.</p>
                <hr style={{width: '100px', borderTop: 0, borderBottom: '1px solid rgba(213, 213, 213, 0.5)', marginBottom: 50}} />
                <div className="sub-title">
                    <p>오늘의 기분이 좋으시군요.</p>
                    <p>오늘 기분에 맞춰 깔끔한</p>
                    <p>카스를 추천드려요</p>
                </div>
            </div>
        );
    }

    else if(message === 'face') {
        const emojiTrans = (emotion) => {
            switch(emotion) {
                case 'smile':
                    return '오늘 환하게 웃고 계시네요!';
                case 'suprise':
                    return '뭐가 그렇게 놀라게 만드셨나요?!';
                case 'neutral':
                    return '오늘 기분은 나른하시군요';
                case 'laugh':
                    return '뭐가 그렇게 웃기나요?';
                case 'fear':
                    return '무서운 건 좋지 않아요!';
                case 'disgust':
                    return '어디 안좋으신거 아니죠?';
                case 'angry':
                    return '화나면 속이 상해 안상해';
                case 'sad':
                    return '한잔하면서 다 풀어요.';
                case 'talking':
                    return '수다쟁이시군요!!';
                default:
                    return '오늘 기분이 좋으시군요';
            }
        }

        return (
            <div className="beer-title">
                <p>당신을 위한 맥주를 추천해드립니다.</p>
                <hr style={{width: '100px', borderTop: 0, borderBottom: '1px solid rgba(213, 213, 213, 0.5)', marginBottom: 50}} />
                <div className="sub-title">
                    <p>{emojiTrans(beerInfo.emotion)}</p>
                    <p>오늘 기분에 맞춰 {beerInfo.taste}한</p>
                    <p>{beerInfo.name}를(을) 추천드려요!</p>
                </div>
            </div>
        );       
    } else if(message === 'beer') {
        return (
            <div className="beer-title">
                <p>이미 맥주를 선택하셨군요!</p>
                <hr style={{width: '100px', borderTop: 0, borderBottom: '1px solid rgba(213, 213, 213, 0.5)', marginBottom: 50}} />
                <div className="sub-title">
                    <p>아래 추천 안주와 함께</p>
                    <p>혼자비어에서 즐거운</p>
                    <p>혼술 타임을 가져보세요!</p>
                </div>
            </div>
        );
    }
}

export default BeerTitle;