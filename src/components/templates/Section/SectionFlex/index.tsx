import type { ReactNode } from 'react';
import styles from './SectionFlex.module.css';

interface Props {
  children: ReactNode;
}

export default function SectionFlex({ children }: Props) {
  return <div className={styles['section-flex']}>{children}</div>;
}
