import SimpleIcon from '@/components/core/SimpleIcon';
import Link from 'next/link';
import styles from './SocialItem.module.css';

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
      <SimpleIcon icon={'simple-icons:' + name.toLocaleLowerCase()} />
      {name}
    </Link>
  );
}
