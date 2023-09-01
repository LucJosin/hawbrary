import styles from '@/styles/Grid.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Grid({ children }: Props) {
  return <div className={styles.items}>{children}</div>;
}
