import type { ReactNode } from 'react';
import styles from './Title.module.css';

interface Props {
  value?: string;
  children?: ReactNode;
}

export default function Title({ value, children }: Props) {
  return <h1 className={styles.title}>{value ?? children}</h1>;
}
