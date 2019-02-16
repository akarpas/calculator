import React, { Component } from 'react';
import style from './App.module.scss';

class App extends Component {
  state = {
    input: 0,
  }

  render() {
    const { input } = this.state;
    return (
      <div className={style.app}>
        <div className={style.calculator}>
          <div className={style.screen}>
            <input
              className={style.input}
              type="text"
              value={input}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
