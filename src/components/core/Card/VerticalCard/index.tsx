import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './VerticalCard.module.css';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
  children?: ReactNode;
}

export function VerticalCard(props: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={props.thumbnail}
        height={0}
        width={0}
        alt={props.title}
        className={styles.image}
      />
      <div className={styles.more}>
        <div className={styles.info}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
        <div className={styles.routers}>{props.children}</div>
      </div>
    </div>
  );
}
