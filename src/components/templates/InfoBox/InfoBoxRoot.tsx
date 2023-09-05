import styles from '@/styles/ItemBoxRoot.module.css';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function ItemBoxRoot({ title, children }: Props) {
  return (
    <div className={styles.infobox}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
