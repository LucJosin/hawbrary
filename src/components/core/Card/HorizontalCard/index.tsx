import { getDetailsUrl } from '@/lib/url';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HorizontalCard.module.css';

interface Props {
  uuid: string;
  target: string;
  title: string;
  description: string;
  thumbnail: string;
}

export function HorizontalCard({
  uuid,
  target,
  title,
  description,
  thumbnail,
}: Props) {
  return (
    <Link href={getDetailsUrl(target, uuid)}>
      <div className={styles.card}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Image
          src={thumbnail}
          height={0}
          width={0}
          alt={title}
          className={styles.image}
        />
      </div>
    </Link>
  );
}
