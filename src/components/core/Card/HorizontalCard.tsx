import styles from '@/styles/HorizontalCard.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
}

export default function HorizontalCard({
  title,
  description,
  thumbnail,
}: Props) {
  return (
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
  );
}
