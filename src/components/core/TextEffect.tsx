import styles from '@/styles/TextEffect.module.css';

interface Props {
  title: string;
  size?: string;
}

export default function TextEffect({ title, size }: Props) {
  return (
    <h1 className={styles.title} style={{ fontSize: size }}>
      {title}
    </h1>
  );
}
