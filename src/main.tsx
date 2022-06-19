import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Panelbear from "@panelbear/panelbear-js";

import App from './App'


Panelbear.load("i55757Kyr1");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
