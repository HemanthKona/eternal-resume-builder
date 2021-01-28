import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Resumer.dev!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to Resumer.dev!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
