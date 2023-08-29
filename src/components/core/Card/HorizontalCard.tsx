import styles from '@/styles/HorizontalCard.module.css';
import { getDetailsUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  uuid: string;
  target: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function HorizontalCard({
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
