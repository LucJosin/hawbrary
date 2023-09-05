import styles from '@/styles/SimpleLink.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
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
      {!isLocal && <Icon icon="mdi:open-in-new" width="15" />}
    </Link>
  );
}
