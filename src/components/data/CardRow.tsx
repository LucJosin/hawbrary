import styles from '@/styles/CardRow.module.css';
import { Icon } from '@iconify-icon/react';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  maxColumns?: string;
}

export default function CardRow({
  title,
  children,
  maxColumns = 'auto-fit',
}: Props) {
  return (
    <div className={styles.row} id={title.toLocaleLowerCase()}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.more}>
          <p>See more</p>
          <Icon icon="octicon:arrow-right-16" width="24" />
        </span>
      </div>
      <div
        className={styles.items}
        style={{
          gridTemplateColumns: `repeat(${maxColumns}, minmax(20rem, 1fr))`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
