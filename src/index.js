import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import './grid.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import StoreContext from './store'

document.title = 'Movie Web'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

    <StoreContext>
        <App />
    </StoreContext>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
