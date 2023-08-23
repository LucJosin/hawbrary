import styles from '@/styles/DetailsPage.module.css';
import type { ReactNode } from 'react';
import Layout from './Layout';

interface Props {
  children: ReactNode;
}

export default function DetailsPage({ children }: Props) {
  return (
    <Layout isCentered={true}>
      <span className={styles.container}>{children}</span>
    </Layout>
  );
}
