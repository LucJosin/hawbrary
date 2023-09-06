import Link from 'next/link';
import styles from './PrimaryLink.module.css';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
}

export function PrimaryLink({ href, name, isLocal = false }: Props) {
  return (
    <Link href={href} target={isLocal ? undefined : '_blank'}>
      <div className={styles.button}>{name}</div>
    </Link>
  );
}
