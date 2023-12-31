import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import  App  from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <CssBaseline />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
