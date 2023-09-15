// Button.js
import React from 'react';
import { Button } from '@mui/material';

const Number = ({ value, onClick }) => {
  return (
    <Button variant='contained' onClick={() => onClick(value)}>{value}</Button>
  );
};

export default Number;

