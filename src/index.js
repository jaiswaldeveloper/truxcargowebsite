// import React from "react";
// import { createRoot } from "react-dom/client";

// import App, { appRouter } from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { RouterProvider } from "react-router-dom";


// const root = createRoot(document.getElementById("root"));
// root.render(
//   <RouterProvider router={appRouter}>
//     <App />
//   </RouterProvider>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

