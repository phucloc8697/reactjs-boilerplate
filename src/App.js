import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './assets/theme/globalStyles';
import AppNavigation from './navigation';
import configureStore from './redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
