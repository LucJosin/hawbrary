import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Link from 'next/link';
import styles from './SimpleLink.module.css';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
  showIcon?: boolean;
}

export function SimpleLink({
  href,
  name,
  isLocal = false,
  showIcon = true,
}: Props) {
  return (
    <Link
      href={href}
      className={styles.link}
      target={isLocal ? undefined : '_blank'}
    >
      {name}
      {!isLocal && showIcon && <Icon icon="mdi:open-in-new" width="15" />}
    </Link>
  );
}
