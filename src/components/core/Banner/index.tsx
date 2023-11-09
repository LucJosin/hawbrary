import Image from 'next/image';
import { Description } from '../Description';
import styles from './Banner.module.css';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
}

export default function Banner({ title, description, thumbnail }: Props) {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <Description value={description} />
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
