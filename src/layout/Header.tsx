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
      {router.asPath.includes('/explore') && (
        <>
          <div className={styles.links}>
            <Link href="#actors">Actors</Link>
            <Link href="#characters">Characters</Link>
            <Link href="#episodes">Episodes</Link>
            <Link href="#games">Games</Link>
            <Link href="#locations">Locations</Link>
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
        </>
      )}
    </header>
  );
}
