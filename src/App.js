import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keypad from './components /Keypad';
import ResultComponent from "./components /Result";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      result: "0",
      addClass : 'false'
    }
    
    this.clickHandler = this.clickHandler.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
    this.backspace = this.backspace.bind(this);

  }

  clickHandler (button) {

    if(button === '='){
      this.calculate()
    } 
    else if (button === 'reset') {
      this.reset()
    }
    else if (button === 'backspace'){
      this.backspace()
    }
    else {
      if ((this.state.result === '0') || (this.state.result === 'Error')) {
        this.setState ({
          result : button
        })
      } 
      else if(this.state.addClass && !isNaN(parseInt(button, 10))) {
        this.setState ({
          result: button,
          addClass: !this.state.addClass
        })
      } 
      else if(this.state.addClass && (button == '*' || button == '+' || button == '-' || button === '/')) {
        this.setState({
          result: this.state.result + button,
          addClass: !this.state.addClass
        })
      }
      else{
        this.setState({
        result : this.state.result + button
        }) 
      }
    }
  }
  
  // when "=" is clicked
  calculate() {
    this.setState({
      addClass: !this.state.addClass
    })
    // check for error and evaluate
    try {
      this.setState({
        // eslint-disable-next-line 
        result: (eval(this.state.result) || '0')
      }) 
    } 
    // if error occurs, return error
    catch {
      this.setState({
        result: "Error"
      })
    }
  }

  // when 'Reset' is clicked, change display to null
  reset() {
    this.setState ({
      result: "0"
    })
  }

  // when 'backspace' is clicked, remove last element
    backspace() {
      if (this.state.result.length === 1) {
        this.setState({
          result: '0'
        })
      } else {
        console.log('got here');
          this.setState ({
          result : this.state.result.slice(0, -1)
        }) 
      }
    }
  

  render(){

    return (
      <div className="App container-fluid"> 
        <header className="App-header">
          Calculator <span id="with">with</span><span id="react">     ReactJs</span> 
        </header>
        <div id="parent">
          <div className="all">
            <ResultComponent result={this.state.result}/> 
            <Keypad clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );

  }
}
export default App;
