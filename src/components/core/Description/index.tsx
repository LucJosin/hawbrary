import type { Property } from 'csstype';
import styles from './Description.module.css';

interface Props {
  value?: string;
  children?: string;
  textAlign?: Property.TextAlign;
  fontSize?: string;
}

export function Description({
  value,
  children,
  textAlign = 'initial',
  fontSize = '1em',
}: Props) {
  return (
    <p className={styles.description} style={{ textAlign, fontSize }}>
      {value ?? children}
    </p>
  );
}
