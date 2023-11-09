import { SecondaryLink } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import Reference from '@/components/data/Reference';
import { APIInfo } from '@/components/templates/APIInfo';
import ErrorModal from '@/components/templates/ErrorModal';
import { InfoBox } from '@/components/templates/InfoBox';
import { Sources } from '@/components/templates/Sources';
import Layout from '@/layout/Layout';
import { formatMilliseconds } from '@/lib/date';
import { getDetailsUrlFromHref } from '@/lib/url';
import { formatAsCurrency } from '@/lib/utils';
import { getSingleSeason } from '@/services/hawapi';
import styles from '@/styles/SeasonDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function SeasonDetailsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <SeasonDetails />
      </div>
    </Layout>
  );
}

function SeasonDetails() {
  const [isImageSelected, setImageSelected] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    const lang = window.sessionStorage.getItem('language') || language;
    setLanguage(lang);
  }, [language]);

  const { data, error, isLoading } = useSWR(uuid, getSingleSeason);

  if (error) return <ErrorModal />;
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
      <span
        className={styles.image}
        style={{
          height: isImageSelected ? 'fit-content' : '30rem',
          cursor: isImageSelected ? 'zoom-out' : 'zoom-in',
        }}
        onClick={() => {
          setImageSelected(!isImageSelected);
        }}
      >
        <Image
          src={data.data.thumbnail}
          alt={data.data.title}
          className={styles.thumbnail}
          height={0}
          width={0}
        />
      </span>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.data.title}</h1>
        <p className={styles.description}>{data.data.description}</p>
        <span className={styles.genres}>
          {data.data.genres.map((item, key) => {
            return (
              <span key={key} className={styles.genre}>
                {item}
              </span>
            );
          })}
        </span>
        <InfoBox.Root title="About:">
          <InfoBox.Item
            icon="system-uicons:episodes"
            name="Season"
            value={`${data.data.season_num}`}
          />
          <InfoBox.Item
            icon="ic:baseline-access-time"
            name="Watch time"
            value={`${formatMilliseconds(data.data.duration_total ?? 0)}`}
          />
          <InfoBox.Item
            icon="ic:baseline-attach-money"
            name="Budget"
            value={`${formatAsCurrency(data.data.budget ?? 0, language)}`}
          />
        </InfoBox.Root>
        <Reference
          title="Episodes:"
          target="episodes"
          data={data.data.episodes}
        />
        <div className={styles.seasons}>
          <h3>Seasons: </h3>
          <span className={styles.seas}>
            {data.data.prev_season && (
              <SecondaryLink
                href={getDetailsUrlFromHref('seasons', data.data.prev_season)}
                name="Prev season"
                isLocal={true}
              />
            )}
            {data.data.next_season && (
              <SecondaryLink
                href={getDetailsUrlFromHref('seasons', data.data.next_season)}
                name="Next season"
                isLocal={true}
              />
            )}
          </span>
        </div>
        <Sources sources={data.data.sources} />
        <APIInfo
          uuid={data.data.uuid}
          href={data.data.href}
          createdAt={data.data.created_at}
          updatedAt={data.data.updated_at}
        />
      </div>
    </>
  );
}
