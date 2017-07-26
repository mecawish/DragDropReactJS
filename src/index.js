import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';

const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('root'));

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App/App', load);
}

load();