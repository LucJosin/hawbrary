import styles from '@/styles/SimpleCard.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
}

export default function SimpleCard({ title, description, thumbnail }: Props) {
  return (
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
  );
}
