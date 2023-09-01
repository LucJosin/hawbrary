import styles from '@/styles/SecondaryLink.module.css';
import Link from 'next/link';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
}

export function SecondaryLink({ href, name, isLocal = false }: Props) {
  return (
    <Link href={href} target={isLocal ? undefined : '_blank'}>
      <div className={styles.button}>{name}</div>
    </Link>
  );
}
