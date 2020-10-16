import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  container
);

if (process.env.NODE_ENV === 'development' && typeof module !== 'undefined' && module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, container);
  });
}
