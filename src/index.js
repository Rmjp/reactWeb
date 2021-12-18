import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const el = <h1>Hello World</h1>;
// ========================================
var i = 0;
function ren(){
  i++;
  const elm = <h1>count = {i}</h1>;
  ReactDOM.render(elm, document.getElementById('root'));
}

setInterval(ren, 1000);