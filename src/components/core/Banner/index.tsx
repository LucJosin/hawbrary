import Image from 'next/image';
import { Description } from '../Description';
import Title from '../Title/Title';
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
        <Title value={title} />
        <Description value={description} textAlign="center" />
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
