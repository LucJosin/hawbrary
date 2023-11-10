import type { ReactNode } from 'react';
import styles from './SubTitle.module.css';

interface Props {
  value?: string;
  children?: ReactNode;
  fontSize?: string;
  margin?: string;
}

export default function SubTitle({
  value,
  children,
  fontSize = '1em',
  margin,
}: Props) {
  return (
    <h2 className={styles.title} style={{ fontSize, margin }}>
      {value ?? children}
    </h2>
  );
}
