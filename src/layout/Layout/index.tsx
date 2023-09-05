import BackgroundEffect from '@/components/core/BackgroundEffect';
import Head from 'next/head';
import type { ReactNode } from 'react';
import Header from '../Header';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
  classes?: string[];
  isCentered?: boolean;
}

export default function Layout({ children, classes, isCentered }: Props) {
  return (
    <>
      <Head>
        <title>Home | Hawbrary - A showcase for the HawAPI project</title>
        <meta
          name="description"
          content="A showcase for the HawAPI project. A Free and Open Source API for Stranger Things"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${classes}`}>
        <BackgroundEffect />
        <Header />
        <div
          className={styles.container}
          style={{
            height: isCentered ? '92vh' : undefined,
            justifyContent: isCentered ? 'center' : undefined,
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
}
