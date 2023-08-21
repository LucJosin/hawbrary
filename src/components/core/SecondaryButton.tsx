import styles from '@/styles/SecondaryButton.module.css';
import Link from 'next/link';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
}

export default function SecondaryButton({
  href,
  name,
  isLocal = false,
}: Props) {
  return (
    <Link href={href} target={isLocal ? undefined : '_blank'}>
      <div className={styles.button}>{name}</div>
    </Link>
  );
}
