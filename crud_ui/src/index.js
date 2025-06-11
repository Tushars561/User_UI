import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import this
import App from './App';
import { Provider } from 'react-redux';

import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>          {/* Wrap your app with this */}
  //   <App />
  // </BrowserRouter>
  
   <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* ✅ wrap with BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

