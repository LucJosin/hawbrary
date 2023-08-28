import styles from '@/styles/SimpleLink.module.css';
import Link from 'next/link';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
}

export default function SimpleLink({ href, name, isLocal = false }: Props) {
  return (
    <Link
      href={href}
      className={styles.link}
      target={isLocal ? undefined : '_blank'}
    >
      {name}
    </Link>
  );
}
