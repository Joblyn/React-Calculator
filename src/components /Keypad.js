import React from 'react';
import { Button } from 'react-bootstrap';

const Keypad = ({ clickHandler }) => {
  return (
    <div className="buttons">

      <Button id="clear" name="backspace" onClick={e => clickHandler(e.target.name)}>Backspace</Button>
      <Button id="reset" name="reset" onClick={e => clickHandler(e.target.name)}>Reset</Button>

      <Button id="one" name="1" onClick={e => clickHandler(e.target.name)}>1</Button> 
      <Button id="two" name="2" onClick={e => clickHandler(e.target.name)}>2</Button> 
      <Button id="three" name="3" onClick={e => clickHandler(e.target.name)}>3</Button>
      
      <Button id="four" name="4" onClick={e => clickHandler(e.target.name)}>4</Button>
      <Button id="five" name="5" onClick={e => clickHandler(e.target.name)}>5</Button>
      <Button id="six" name="6" onClick={e => clickHandler(e.target.name)}>6</Button>
      
      <Button id="seven" name="7" onClick={e => clickHandler(e.target.name)}>7</Button>
      <Button id="eight" name="8" onClick={e => clickHandler(e.target.name)}>8</Button>
     <Button id="nine" name="9" onClick={e => clickHandler(e.target.name)}>9</Button>
   
      <Button id="zero" name="0" onClick={e => clickHandler(e.target.name)}>0</Button>

      <Button id="divide" name="/" onClick={e => clickHandler(e.target.name)}>/</Button>
     <Button id="multiply" name="*" onClick={e => clickHandler(e.target.name)}>*</Button>
     <Button id="subtract" name="-" onClick={e => clickHandler(e.target.name)}>-</Button>
      <Button id="add" name="+" onClick={e => clickHandler(e.target.name)}>+</Button>
  
      <Button id="decimal" name="." onClick={e => clickHandler(e.target.name)}>.</Button>
      <Button id="equals" name="=" onClick={e => clickHandler(e.target.name)}>=</Button>

    </div>
  )
}

export default Keypad; 