import styles from '@/styles/SimpleTitle.module.css';

interface Props {
  text: string;
}

export default function SimpleTitle({ text }: Props) {
  return <h1 className={styles.title}>{text}</h1>;
}
