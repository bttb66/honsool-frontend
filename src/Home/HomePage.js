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
            <div className="center">
                홈 페이지 컨테이너입니다.
                <p>
                  <input type="file" accept="image/*" id="capture" capture="camera" onChange={this.handleChange}/>
                </p>
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