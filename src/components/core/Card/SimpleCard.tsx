import styles from '@/styles/SimpleCard.module.css';
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

export default function SimpleCard({
  uuid,
  target,
  title,
  description,
  thumbnail,
}: Props) {
  return (
    <Link href={getDetailsUrl(target, uuid)}>
      <div className={styles.card}>
        <Image
          src={thumbnail}
          height={0}
          width={0}
          alt={title}
          className={styles.image}
        />
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
