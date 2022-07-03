// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import * as serviceWorker from './serviceWorker';

// import './App.scss';

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom/client";
 
import App from "./App";
 

import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 

serviceWorker.unregister();

