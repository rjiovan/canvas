//Vendor libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Style
import './index.css';

//Components
import App from './App';
import Name from './components/Name'

//Utilities
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Name />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
