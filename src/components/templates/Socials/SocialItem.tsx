import styles from '@/styles/SocialItem.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Link from 'next/link';

interface Props {
  name: string;
  url: string;
  handle: string;
}

export function SocialItem({ name, url, handle }: Props) {
  return (
    <Link
      href={url}
      title={name + ' - ' + handle}
      target="_blank"
      className={styles.social}
    >
      <Icon icon={'simple-icons:' + name.toLocaleLowerCase()} />
      {name}
    </Link>
  );
}
