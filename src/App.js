import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
import Router from './routes';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
