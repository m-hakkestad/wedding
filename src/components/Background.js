import React, { Component } from 'react';
import '../styles/background.scss';

class Background extends Component {
  render() {
    return (
        <div className="background">
            <img src={require("../img/m_m.png")} alt=''/>
        </div>
    );
  }
}

export default Background;
