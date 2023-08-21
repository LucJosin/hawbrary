import styles from '@/styles/Card.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
}

export default function Card({ title, description, thumbnail }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1>{title}</h1>
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
