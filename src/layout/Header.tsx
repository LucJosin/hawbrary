import TextEffect from '@/components/core/TextEffect';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <TextEffect title="Hawbrary" size="1.2rem" />
      </Link>
    </header>
  );
}
