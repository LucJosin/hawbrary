import BackgroundEffect from '@/components/core/BackgroundEffect';
import styles from '@/styles/Layout.module.css';
import Head from 'next/head';
import type { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
  classes?: string[];
  isCentered?: boolean;
}

export default function Layout({ children, classes, isCentered }: Props) {
  return (
    <>
      <Head>
        <title>Home | Hawbrary - A Showcase for the HawAPI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${classes}`}>
        <BackgroundEffect />
        <Header />
        <div
          className={styles.container}
          style={{
            minHeight: isCentered ? '85vh' : undefined,
            justifyContent: isCentered ? 'center' : undefined,
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
}