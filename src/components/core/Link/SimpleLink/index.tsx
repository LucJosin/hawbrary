import Link from 'next/link';
import SimpleIcon from '../../SimpleIcon';
import styles from './SimpleLink.module.css';

interface Props {
  href: string;
  name: string;
  isLocal?: boolean;
  showIcon?: boolean;
  iconSize?: string;
}

export function SimpleLink({
  href,
  name,
  isLocal = false,
  showIcon = true,
  iconSize = '15',
}: Props) {
  return (
    <Link
      href={href}
      className={styles.link}
      target={isLocal ? undefined : '_blank'}
    >
      {name}
      {!isLocal && showIcon && (
        <SimpleIcon icon="mdi:open-in-new" size={iconSize} />
      )}
    </Link>
  );
}
