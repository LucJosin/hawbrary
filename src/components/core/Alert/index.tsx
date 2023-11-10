import { useEffect, useState, type ReactNode } from 'react';
import SimpleIcon from '../SimpleIcon';
import styles from './Alert.module.css';

interface Props {
  id: string;
  children: ReactNode;
}

export default function Alert({ id, children }: Props) {
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    setIsDismissed(!!sessionStorage.getItem('alert:' + id));
  }, [id]);

  function dismissAlert() {
    sessionStorage.setItem('alert:' + id, 'true');
    setIsDismissed(true);
  }

  if (isDismissed) return null;

  return (
    <div className={styles.banner}>
      <span className={styles.message}>{children}</span>
      <span className={styles.close} onClick={dismissAlert}>
        <SimpleIcon icon="mdi:close" size="18" />
      </span>
    </div>
  );
}
