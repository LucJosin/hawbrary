import Alert from '@/components/core/Alert';
import BackgroundEffect from '@/components/core/BackgroundEffect';
import { Link } from '@/components/core/Link';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Head from 'next/head';
import type { ReactNode } from 'react';
import Header from '../Header';
import styles from './Layout.module.css';

interface Metadata {
  name: string;
  title: string;
  description: string;
  tags: string;
  url: string;
  author: string;
  social: string;
}

interface Props {
  children: ReactNode;
  isCentered?: boolean;
  metadata?: Metadata;
}

export default function Layout({
  children,
  isCentered,
  metadata = {
    name: 'Hawbrary',
    title: 'Home | Hawbrary - A showcase for the HawAPI project',
    description:
      'A showcase for the HawAPI - A Free and Open Source API for Stranger Things. This library includes actors, characters, episodes, locations, seasons and all its information.',
    tags: 'stranger things, stranger, things, stranger-things, api, github, git, hawapi, haw api, haw-api, HawAPI/HawAPI, theproject id, theproject.id, hawapi.theproject.id, netflix, watch, showcase, free, open source',
    url: 'https://hawbrary.theproject.id',
    author: 'Lucas Josino',
    social: '@LucJosin',
  },
}: Props) {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en-US" />
        <meta httpEquiv="content-type" content="text/html" />

        <meta
          name="copyright"
          content="© 2023, Lucas Josino. All Rights Reserved."
        />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="tags" content={metadata.tags} />
        <meta name="keywords" content={metadata.tags} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,nofollow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={metadata.social} />
        <meta name="twitter:site" content={metadata.social} />
        <meta name="twitter:domain" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta
          name="twitter:description"
          property="og:description"
          itemProp="description"
          content={metadata.description}
        />
        <meta
          property="twitter:image"
          itemProp="image primaryImageOfPage"
          content={`${metadata.url}/images/banner.png`}
        />

        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.name} />
        <meta property="og:site_name" content={metadata.name} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${metadata.url}/images/banner.png`}
        />

        <link rel="canonical" href={metadata.url} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${metadata.url}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${metadata.url}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${metadata.url}/favicon-16x16.png`}
        />
        <link rel="icon" href="/favicon.ico" />

        <title>{metadata.title}</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Alert id="poweredBy">
          <Icon icon="mdi:information" width={18} />
          This library is powered by the{' '}
          <Link.Simple
            href="https://hawapi.theproject.id/"
            name="HawAPI - A Free and Open Source API
            for Stranger Things"
          />
        </Alert>
        <div
          className={styles.container}
          style={{
            height: isCentered ? '92vh' : undefined,
            justifyContent: isCentered ? 'center' : undefined,
          }}
        >
          <BackgroundEffect />
          {children}
        </div>
      </main>
    </>
  );
}
