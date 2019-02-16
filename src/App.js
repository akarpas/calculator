import React, { Component } from 'react';
import buttons from "./data/buttons.json";
import style from './App.module.scss';

class App extends Component {
  state = {
    input: 0,
  }

  render() {
    const { input } = this.state;
    const { numbers, operations, other } = buttons;

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
          <div className={style.buttons}>
            <div className={style.left}>
              <div className={style.other}>
                {other.map(button =>
                  <button id={button.description} className={style.buttonOther}>{button.sign}</button>)}
              </div>
              <div className={style.numbers}>
                {numbers.map(number =>
                  <button id={number} className={number === 0
                    ? style.buttonNumberZero : style.buttonNumber}>
                    {number}
                  </button>)}
              </div>
            </div>
            <div className={style.right}>
              {operations.map(operation => 
                <button className={style.buttonOperation}>{operation}</button>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
