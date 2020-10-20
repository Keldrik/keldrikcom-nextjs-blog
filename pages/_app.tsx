import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import '../styles/index.css';
import '../styles/prism.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    Fathom.load('CJTYANEN', {
      includedDomains: ['www.keldrik.com'],
      url: 'https://mastodon.keldrik.com/script.js',
    });
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default App;
