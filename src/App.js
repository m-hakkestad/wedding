import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
            <div className="App-header-top">
                <div className="circle red"></div>
                <div className="circle orange"></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
                <div className="circle blue"></div>
                <div className="circle purple"></div>
                <div className="circle pink"></div>
            </div>
            <div className="App-header-bottom">
                <h1>M & M</h1>
            </div>
        </header>

        <div className="App-body">
        </div>

        <footer className="App-footer">
        </footer>

      </div>
    );
  }
}

export default App;
