import { getDetailsUrl } from '@/lib/url';
import Image from 'next/image';
import Link from 'next/link';
import SubTitle from '../../Title/SubTitle';
import styles from './SimpleCard.module.css';

interface Props {
  uuid: string;
  target: string;
  title: string;
  description: string;
  thumbnail: string;
}

export function SimpleCard({
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
          <SubTitle value={title} />
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
