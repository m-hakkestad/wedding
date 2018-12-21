import React, { Component } from 'react';
import '../styles/header.scss';
import CircleRow from './CircleRow.js';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <CircleRow/>
        </header>
    );
  }
}

export default Header;
