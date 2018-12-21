import React, { Component } from 'react';
import '../styles/circleRow.scss';

class CircleRow extends Component {
  render() {
    return (
        <div className="circle-row">
            <div className="circle red"></div>
            <div className="circle orange"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
            <div className="circle blue"></div>
            <div className="circle purple"></div>
            <div className="circle pink"></div>
        </div>
    );
  }
}

export default CircleRow;
