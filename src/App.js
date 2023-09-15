import React, { useState } from 'react';
import Number from './components/Number';
import { TextField, Button } from '@mui/material';



function App() {
  const [display, setDisplay] = useState(' ');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) =>
      prevDisplay === '0' ? value : prevDisplay + value
    );
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay('Error');
      setExpression('');
    }
  };

  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+',
  ];

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Calculator</h1>
      <div className="calculator">
      <TextField id="outlined-basic" label="Calculator" variant="outlined" value={display} margin='normal'/>
        <div className="buttons">
          {buttonValues.map((value, index) => (
            <Number key={index} value={value} onClick={handleButtonClick} />
          ))}
          <Button variant='contained' value = "=" onClick={handleEqualClick}>=</Button>
          <Button variant='contained' value="C" onClick={handleClearClick} >C</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
