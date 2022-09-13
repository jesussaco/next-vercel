import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from '../node_modules/next/app';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout( <Component {...pageProps} /> );
}

export default MyApp
