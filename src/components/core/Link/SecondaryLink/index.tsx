import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Link from 'next/link';
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
        {!isLocal && <Icon icon="mdi:open-in-new" width="16" />}
      </div>
    </Link>
  );
}
