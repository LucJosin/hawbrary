import SubTitle from '@/components/core/Title/SubTitle';
import type { ReactNode } from 'react';
import styles from './SectionRoot.module.css';

interface Props {
  title: string;
  children: ReactNode;
}

export default function SectionRoot({ title, children }: Props) {
  return (
    <div className={styles['section-container']}>
      <SubTitle value={title} fontSize="1.2em" margin="0 0 1rem 0" />
      <div className={styles['section-items']}>{children}</div>
    </div>
  );
}
