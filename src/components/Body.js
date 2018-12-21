import React, { Component } from 'react';
import '../styles/body.scss';
import Background from './Background.js';
import {Text } from 'react-native';

class Header extends Component {
  render() {
    return (
        <div className="App-body">
            <Background/>
            <Text className="bread-text">
                <Text className="bold">
                VÄLKOMMEN TILL{'\n'}
                MICHAELA OCH MÅRTENS BRÖLLOP!{'\n'}{'\n'}
                </Text>
                05.09.2020{'\n'}
                Ekeby loge{'\n'}
                </Text>
        </div>
    );
  }
}

export default Header;
