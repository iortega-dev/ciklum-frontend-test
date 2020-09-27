import React from 'react';
import ReactDOM from 'react-dom';
// Bootstrap grid
import '~Assets/css/bootstrap-grid.css';
// Super Responsive table
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
// React Day Picker
import 'react-day-picker/lib/style.css';
// Internationalization
import './i18n.ts'
// Global styles
import './index.css';
// App Component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

