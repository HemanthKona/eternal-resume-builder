// import './disable-speedy'

import { CacheProvider, jsx, css } from '@emotion/core'
import createCache from '@emotion/cache'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const cache = createCache({
  speedy: false
})

ReactDOM.render(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>
  , document.getElementById('root'));
