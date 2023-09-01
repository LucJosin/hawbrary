import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        errorRetryInterval: 20 * 1000,
        errorRetryCount: 3,
        refreshInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        loadingTimeout: 8 * 1000,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
