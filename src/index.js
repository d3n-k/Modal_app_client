import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import reportWebVitals from './reportWebVitals';
import resultStore from './store/resultStore';
import result5Store from './store/result5Store';
import result1Store from './store/result1Store';
import result2Store from './store/result2Store';
import result4Store from './store/result4Store';
import result3Store from './store/result3Store';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    col: new resultStore(),
    col5: new result5Store(),
    col1: new result1Store(),
    col2: new result2Store(),
    col3: new result3Store(),
    col4: new result4Store(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
