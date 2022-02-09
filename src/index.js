// This index file, here in the root of the src folder, is the entry point for the React app
// This file has to stay here, in this location.

// This import is for the React engine
import React from 'react';

// This import is for browser support
import ReactDOM from 'react-dom';

import './index.css';
import App from './main-page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// This line is the actual entry point
// The first argument of render specifies the top-level component
// The second argument is an HTML element where the App component should be rendered in 
ReactDOM.render(
  // React.StrictMode is a component that can warn us about potential problems in the code.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
