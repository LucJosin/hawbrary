import DetailsFallback from '@/components/templates/DetailsFallback';
import styles from '@/styles/DetailsPage.module.css';
import type { ReactNode } from 'react';
import Layout from './Layout';

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  hasData?: boolean;
}

export default function DetailsPage({
  children,
  isLoading,
  hasData = false,
}: Props) {
  return (
    <Layout isCentered={true}>
      {isLoading && <div className={styles.loading}></div>}
      {hasData && <span className={styles.container}>{children}</span>}
      {!isLoading && !hasData && <DetailsFallback />}
    </Layout>
  );
}
