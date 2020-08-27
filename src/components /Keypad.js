import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

const Keypad = ({ clickHandler }) => {
  return (
    <div className = "container-fluid">
      <div className="buttons container col-12">
        <div className="functions col-12">
          <Button className="key col-4" id="reset" name="reset" onClick={e => clickHandler(e.target.name)}>Reset</Button>
          <Button className="key col-2" id="divide" name="(" onClick={e => clickHandler(e.target.name)}>(</Button> 
          <Button className="key col-2" id="divide" name=")" onClick={e => clickHandler(e.target.name)}>)</Button>
          <Button className="key col-4" id="clear" name="backspace" onClick={e => clickHandler(e.target.name)}>
            <FontAwesomeIcon icon={faBackspace}/>
          </Button> 
        </div>

        <div className="row">
          <div className = "col numbers col-9">

            <div className="row">
              <Button className="key col-4" id="one" name="1" onClick={e => clickHandler(e.target.name)}>1</Button> 
              <Button className="key col-4" id="two" name="2" onClick={e => clickHandler(e.target.name)}>2</Button> 
              <Button className="key col-4" id="three" name="3" onClick={e => clickHandler(e.target.name)}>3</Button>
            </div>

            <div className="row">
              <Button className="key col-4" id="four" name="4" onClick={e => clickHandler(e.target.name)}>4</Button>
              <Button id="five" className="key col-4" name="5" onClick={e => clickHandler(e.target.name)}>5</Button>
              <Button className="key col-4" id="six" name="6" onClick={e => clickHandler(e.target.name)}>6</Button>
            </div>

            <div className="row">
              <Button className="key col-4" id="seven" name="7" onClick={e => clickHandler(e.target.name)}>7</Button>
              <Button className="key col-4" id="eight" name="8" onClick={e => clickHandler(e.target.name)}>8</Button>
              <Button className="key col-4" id="nine" name="9" onClick={e => clickHandler(e.target.name)}>9</Button>
            </div>

            <div className="row">
              <Button className="key col-4" id="zero" name="0" onClick={e => clickHandler(e.target.name)}>0</Button>
              <Button className="key col-4" id="decimal" name="." onClick={e => clickHandler(e.target.name)}>.</Button>
              <Button className="key col-4" id="equals" name="=" onClick={e => clickHandler(e.target.name)}>=</Button>
            </div>

          </div>

          <div className = "col operations col-3">
            
              <Button className="key col-12 operator" id="divide" name="/" onClick={e => clickHandler(e.target.name)}>/</Button>
              <Button className="key col-12 operator" id="multiply" name="*" onClick={e => clickHandler(e.target.name)}>X</Button>
              <Button className="key col-12 operator" id="subtract" name="-" onClick={e => clickHandler(e.target.name)}>-</Button>
              <Button className="key col-12 operator" id="add" name="+" onClick={e => clickHandler(e.target.name)}>+</Button>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default Keypad; 