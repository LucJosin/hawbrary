import Fallback from '@/components/templates/Fallback';
import styles from '@/styles/FallbackLayout.module.css';
import type { ReactNode } from 'react';
import Layout from './Layout';

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  hasData?: boolean;
}

export default function FallbackLayout({
  children,
  isLoading,
  hasData = false,
}: Props) {
  return (
    <Layout isCentered={true}>
      {isLoading && <div className={styles.loading}></div>}
      {hasData && <span className={styles.container}>{children}</span>}
      {!isLoading && !hasData && <Fallback />}
    </Layout>
  );
}
