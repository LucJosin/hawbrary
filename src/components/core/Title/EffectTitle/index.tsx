import styles from './EffectTitle.module.css';

interface Props {
  title: string;
  size?: string;
}

export default function EffectTitle({ title, size }: Props) {
  return (
    <h1 className={styles.title} style={{ fontSize: size }}>
      {title}
    </h1>
  );
}
