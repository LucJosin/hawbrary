import styles from '@/styles/FallbackRoot.module.css';
import type { ReactNode } from 'react';
import FallbackModel from './FallbackModel';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  isLoading?: boolean;
  hasData?: boolean;
}

export default function FallbackRoot({
  children,
  fallback,
  isLoading,
  hasData = false,
}: Props) {
  return (
    <>
      {isLoading && <div className={styles.loading}></div>}
      {hasData && <>{children}</>}
      {!isLoading && !hasData && (fallback ?? <FallbackModel />)}
    </>
  );
}
