import { Icon } from '@iconify-icon/react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './HorizontalRow.module.css';

interface Props {
  title: string;
  children: ReactNode;
  maxColumns?: string;
}

export default function HorizontalRow({
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
          <Icon icon="octicon:arrow-right-16" width="24" />
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
