import type { ReactNode } from 'react';
import styles from './SubTitle.module.css';

interface Props {
  value?: string;
  children?: ReactNode;
  fontSize?: string;
}

export default function SubTitle({ value, children, fontSize = '1em' }: Props) {
  return (
    <h2 className={styles.title} style={{ fontSize }}>
      {value ?? children}
    </h2>
  );
}
