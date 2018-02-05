//@flow

// function sleep(ms: number) {
//   let sleepPromise = new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
//
//   return sleepPromise;
// }

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let div = document.createElement('div');
if (document.body) {
  document.body.appendChild(div);
}
ReactDOM.render(<App />, div);
