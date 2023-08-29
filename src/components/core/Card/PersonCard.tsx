import styles from '@/styles/PersonCard.module.css';
import { getDetailsUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  uuid: string;
  target: string;
  name: string;
  description: string[];
  thumbnail: string;
}

export default function PersonCard({
  uuid,
  target,
  name,
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
          alt={name}
          className={styles.image}
        />
        <div className={styles.container}>
          <h1 className={styles.name}>{name}</h1>
          {description.map((item, key) => {
            return (
              <span key={key} className={styles.description}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
