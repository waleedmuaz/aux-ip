import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './App';
import '../src/Styles.css';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
