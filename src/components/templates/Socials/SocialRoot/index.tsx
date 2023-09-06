import type { ReactNode } from 'react';
import styles from './SocialRoot.module.css';

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
