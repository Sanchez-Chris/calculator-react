import './App.css';
import Button from './components/Button.js';
import Display from './components/Display.js';
import ClearButton from './components/ClearButton.js'
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  
 
  var [input, setInput] = useState('');
 

  const addInput = digit => {
    setInput(input + digit);
  };
  
  

  
  const clear = () => {
    setInput('');
  }


  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("You need imputs to calculate :)");
    }
  };
 
 


  return (
    <div className="App">
      <div className='calculator-body'>

         <Display 
            output={input}/>

<div className='row'>
          <Button action={addInput}>1</Button>
          <Button action={addInput}>2</Button>
          <Button action={addInput}>3</Button>
          <Button action={addInput}>+</Button>

         
        </div>
        <div className='row'>
        <Button action={addInput}>4</Button>
          <Button action={addInput}>5</Button>
          <Button action={addInput}>6</Button>
          <Button action={addInput}>-</Button>
        </div>
        <div className='row'>
        <Button action={addInput}>7</Button>
          <Button action={addInput}>8</Button>
          <Button action={addInput}>9</Button>
          <Button action={addInput}>*</Button>
        </div>
        <div className='row'>
        <Button action={calcResult}>=</Button>
          <Button action={addInput}>0</Button>
          <Button action={addInput}>.</Button>
          <Button action={addInput}>/</Button>
        </div>

        <div className='row'>
        <ClearButton 
          action={clear}/>
        </div>

      </div>
    </div>
  );
}


export default App;
