import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'styles/global';
import App from './app';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app'),
);
