import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="/img/icon-512.png" />
        <link
          rel="apple-touch-icon"
          href="favicon.ico"
          type="/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled-Components"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
