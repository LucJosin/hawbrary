import { getDetailsUrl } from '@/lib/url';
import Image from 'next/image';
import Link from 'next/link';
import SubTitle from '../../Title/SubTitle';
import styles from './PersonCard.module.css';

interface Props {
  uuid: string;
  target: string;
  name: string;
  description: string[];
  thumbnail: string;
}

export function PersonCard({
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
          <SubTitle value={name} />
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
