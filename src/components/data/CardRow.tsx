import styles from '@/styles/CardRow.module.css';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function CardRow({ title, children }: Props) {
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.items}>{children}</div>
    </div>
  );
}
