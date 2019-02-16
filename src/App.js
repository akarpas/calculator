import React, { Component } from 'react';
import buttons from "./data/buttons.json";
import style from './App.module.scss';

class App extends Component {
  state = {
    input: null,
    memory: null,
    firstNumber: null,
    operation: null,
    newInput: false,
  }

  handleClick = (e, type) => {
    e.preventDefault();
    const { id } = e.target;
    const {
      input,
      firstNumber,
      operation,
      newInput
    } = this.state;

    switch (type) {
      case "other":
        break;
      case "number":
        if (operation && firstNumber) {
          this.setState({
            input: newInput ? id : input + id,
            newInput: newInput && false,
          });
        } else {
          this.setState({ input: !input ? id : input + id });
        }
        break;
      case "operation":
        if (id === '=') {
          this.setState({ input: this.calculate(operation, firstNumber, input) })
        }
        if (input) {
          this.setState({ operation: id, firstNumber: input, newInput: true })
        }
        break;
      default:
        break;
    }
  }

  calculate = (operation, firstNumber, input) => {
    const firstNumberInt = Number(firstNumber);
    const secondNumberInt = Number(input);
    switch (operation) {
      case "/":
        return firstNumberInt / secondNumberInt;
      case "*":
        return firstNumberInt * secondNumberInt;
      case "+":
        return firstNumberInt + secondNumberInt;
      case "-":
        return firstNumberInt - secondNumberInt;
      default:
        break;
    }
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
              value={!input ? '0' : input}
            />
          </div>
          <div className={style.buttons}>
            <div className={style.left}>
              <div className={style.other}>
                {other.map(button =>
                  <button onClick={e => this.handleClick(e, 'other')} id={button.description} className={style.buttonOther}>{button.sign}</button>)}
              </div>
              <div className={style.numbers}>
                {numbers.map(number =>
                  <button onClick={e => this.handleClick(e, 'number')} id={number} className={number === 0
                    ? style.buttonNumberZero : style.buttonNumber}>
                    {number}
                  </button>)}
              </div>
            </div>
            <div className={style.right}>
              {operations.map(operation =>
                <button id={operation} onClick={e => this.handleClick(e, 'operation')} className={style.buttonOperation}>{operation}</button>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
