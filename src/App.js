import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routers/router';
import { ToastContainer } from 'react-toastify';

function App() {  
 return (
    <React.StrictMode>
      <RouterProvider router={routes} />
      <ToastContainer  autoClose={1500} />
    </React.StrictMode>)
}

export default App;
