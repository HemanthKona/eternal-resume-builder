// import './disable-speedy'

import { CacheProvider, jsx } from '@emotion/core'
import createCache from '@emotion/cache'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/app';

const cache = createCache({
  nonce: 'et',
  key: 'et-css',
  speedy: false
})

ReactDOM.render(
  <CacheProvider value={cache}>
    <Router>
      <App />
    </Router>
  </CacheProvider>
  , document.getElementById('root'));
