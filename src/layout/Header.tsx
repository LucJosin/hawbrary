import TextEffect from '@/components/core/TextEffect';
import styles from '@/styles/Header.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const updateLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(
      window.location.origin + window.location.pathname + `?l=${e.target.value}`
    );
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <TextEffect title="Hawbrary" size="1.2rem" />
      </Link>
      <div className={styles.links}>
        <Link href="/explore/#actors">Actors</Link>
        <Link href="/explore/#characters">Characters</Link>
        <Link href="/explore/#episodes">Episodes</Link>
        <Link href="/explore/#seasons">Seasons</Link>
        <Link href="/explore/#locations">Locations</Link>
      </div>
      <div className={styles.selection}>
        <select
          name="languages"
          id="languages"
          className={styles.select}
          onChange={updateLanguage}
          defaultValue="en-US"
        >
          <option value="en-US">en-US</option>
          <option value="pt-BR">pt-BR</option>
        </select>
        <Icon icon="tabler:language" width="20" />
      </div>
    </header>
  );
}
