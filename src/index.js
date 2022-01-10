import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import resultStore from './store/resultStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    col: new resultStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
