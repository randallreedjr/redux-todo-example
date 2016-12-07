import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import todoApp from './reducers';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let store = createStore(todoApp);
