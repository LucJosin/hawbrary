import type { ReactNode } from 'react';
import styles from './SectionGrid.module.css';

interface Props {
  children: ReactNode;
  gridMin: string;
  gridRepeat?: string;
}

export default function SectionGrid({
  children,
  gridRepeat = 'auto-fit',
  gridMin,
}: Props) {
  return (
    <div
      className={styles['section-grid']}
      style={{
        gridTemplateColumns: `repeat(${gridRepeat}, minmax(${gridMin}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
