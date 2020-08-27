import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keypad from './components /Keypad';
import ResultComponent from "./components /Result";
// import { getRoles } from '@testing-library/react';

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
        console.log('1');
        this.setState ({
          result : button,
          addClass: 'false'
        })
      } 
      else if(this.state.addClass === 'true' && !isNaN(parseInt(button, 10))) {
        console.log('2');
        this.setState ({
          result: button,
          addClass: 'false'
        })
      } else if(this.state.addClass === 'true' && (button === '*' || button === '+' || button === '-' || button === '/')) {
        console.log('3');
        this.setState({
          result: this.state.result + button,
          addClass: 'false'
        })
      }
      else{ 
        console.log('4');
        if(button === '.' && this.state.result.includes('.')){
          console.log('4a');
          this.setState({
            result: this.state.result
          })
        } else {
          console.log('4b');
          this.setState({
          result : this.state.result + button
          }) 
        }
      }
    }
  }
  
  // when "=" is clicked
  calculate() {
    this.setState({
      addClass: 'true'
    })
    // check for error and evaluate
    const calc = ()=>{
      // eslint-disable-next-line 
     let res = (eval(this.state.result));
     this.setState({result : (res.toString() || '0')})
     }
   try {
      calc()
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
        console.log('5');
        this.setState({
          result: '0'
        })
      } else if(this.state.addClass === 'true'){
        this.setState({
          result: this.state.result
        })
      } else {
        console.log('6');
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
