import styles from '@/styles/Grid.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  min?: string;
}

export default function Grid({ children, min = '20rem' }: Props) {
  return (
    <div
      className={styles.items}
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${min}, 1fr))` }}
    >
      {children}
    </div>
  );
}
