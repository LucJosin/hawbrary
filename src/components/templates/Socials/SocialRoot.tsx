import styles from '@/styles/SocialRoot.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function SocialRoot({ children }: Props) {
  return (
    <>
      <h3>Socials:</h3>
      <div className={styles.socials}>{children}</div>
    </>
  );
}
