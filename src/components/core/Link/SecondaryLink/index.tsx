import Link from 'next/link';
import SimpleIcon from '../../SimpleIcon';
import styles from './SecondaryLink.module.css';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
}

export function SecondaryLink({ href, name, isLocal = false }: Props) {
  return (
    <Link href={href} target={isLocal ? undefined : '_blank'}>
      <div className={styles.button}>
        {name}
        {!isLocal && <SimpleIcon icon="mdi:open-in-new" />}
      </div>
    </Link>
  );
}
