import React, { Component } from 'react';
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

    handleChange(ev) {
      this.setState({
        file: ev
      })
      console.log(ev.target.files);
    }

    render() {
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

export default HomePage;
