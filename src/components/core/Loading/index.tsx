import styles from './Loading.module.css';

interface Props {
  borderSize?: string;
  size?: string;
  margin?: string;
}

export default function Loading({
  borderSize = '0.4rem',
  size = '3.5rem',
  margin,
}: Props) {
  return (
    <span
      className={styles.loading}
      style={{
        border: `${borderSize} solid #00000091`,
        borderTop: `${borderSize} solid red`,
        height: size,
        width: size,
        margin: margin,
      }}
    ></span>
  );
}
