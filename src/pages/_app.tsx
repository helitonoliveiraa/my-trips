import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyle from '@/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="favicon.ico" type="/img/icon-512.png" />
        <link
          rel="apple-touch-icon"
          href="favicon.ico"
          type="/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project to show my favorite spots in the world."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <NextNProgress
        color="#C3BF6D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  );
}

export default App;
