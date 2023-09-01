import styles from '@/styles/PaginationRoot.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function PaginationRoot({ children }: Props) {
  return <div className={styles.pagination}>{children}</div>;
}
