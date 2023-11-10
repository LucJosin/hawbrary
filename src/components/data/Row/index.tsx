import SimpleIcon from '@/components/core/SimpleIcon';
import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Row.module.css';

interface Props {
  title: string;
  children: ReactNode;
  maxColumns?: string;
}

export default function Row({
  title,
  children,
  maxColumns = 'auto-fit',
}: Props) {
  return (
    <div className={styles.row} id={title.toLocaleLowerCase()}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <Link
          className={styles.more}
          href={`/explorer/${title.toLocaleLowerCase()}/`}
        >
          <p>See more</p>
          <SimpleIcon icon="octicon:arrow-right-16" size="20" />
        </Link>
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
