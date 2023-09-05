import type { ReactNode } from 'react';
import styles from './Grid.module.css';

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
