import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'App';

import { persistor, store } from 'redux/store';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-08-phonebook">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <App />
          <ToastContainer />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
