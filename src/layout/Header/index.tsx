import Loading from '@/components/core/Loading';
import { Title } from '@/components/core/Title';
import { setLanguage as setHawAPILanguage } from '@/services/hawapi';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';
import styles from './Header.module.css';

export default function Header() {
  const [language, setLanguage] = useState<string | null>(null);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    let localLanguage = window.sessionStorage.getItem('language');
    if (!localLanguage) {
      localLanguage = 'en-US';
      window.sessionStorage.setItem('language', localLanguage);
    }
    setLanguage(localLanguage);
  }, []);

  const updateLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.sessionStorage.setItem('language', e.target.value);
    await setHawAPILanguage(e.target.value);

    // Revalidate all data from SWR
    await mutate(() => true, undefined, { revalidate: true });
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Title.Effect title="Hawbrary" size="1.2rem" />
      </Link>
      <div className={styles.links}>
        <Link href="/explorer/">Explorer</Link>|
        <Link href="/explorer/actors/">Actors</Link>
        <Link href="/explorer/characters/">Characters</Link>
        <Link href="/explorer/episodes/">Episodes</Link>
        <Link href="/explorer/seasons/">Seasons</Link>
        <Link href="/explorer/locations/">Locations</Link>
        <Link href="/explorer/games/">Games</Link>
      </div>
      <div className={styles.selection}>
        {language ? (
          <select
            name="languages"
            id="languages"
            className={styles.select}
            onChange={updateLanguage}
            defaultValue={language ?? 'en-US'}
          >
            <option value="en-US">en-US</option>
            <option value="pt-BR">pt-BR</option>
          </select>
        ) : (
          <Loading borderSize="0.2rem" size="1.8rem" margin="1rem" />
        )}
        <Icon icon="tabler:language" width="20" />
      </div>
    </header>
  );
}
