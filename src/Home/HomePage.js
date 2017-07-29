import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as photo from 'reduxDuck/photo.duck';

import './styles/home.css';


class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        file: null
      };
    
      this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(ev) {
      const { PhotoActions } = this.props;
      console.log(ev.target.files);
      if(ev.target.files.length > 0) {
        // 서버로 보내기
        try {
          await PhotoActions.sendPhoto(ev.target.files[0]);
          
        } catch (e) {
          this.props.history.push('/main');
        }
        // 페이지 이동
        
      }
    }

    render() {
      console.log(this.props);
        return (
          <div className="home">
            <div className="black-box"></div>
              <div className="center">
                <div className="center-inner">
                  <div className="title">혼맥러들을 위한</div>
                  <div className="logo"><img src={require('./styles/logo.png')}/></div>
                  <div className="slogan">
                    <p>오늘도 나는</p>
                    <p>혼자 맥주를</p>
                    <p>비운다</p>
                  </div>
                  <div className="filebox">
                    <label htmlFor="capture">맥주 추천 받기</label>
                    <input
                      className="file"
                      type="file"
                      accept="image/*"
                      id="capture"
                      capture="camera"
                      onChange={this.handleChange}
                    />
                    </div>
                    <div className="copyrighted">
                      한잔비어 2017 @ copyrighted
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default connect(
    state => ({
      fetching: state.photo.getIn(['requests', 'sendPhoto']),
      valid: state.photo.get('valid')
    }),
    dispatch => ({
      PhotoActions: bindActionCreators(photo, dispatch)
    })
)(HomePage);