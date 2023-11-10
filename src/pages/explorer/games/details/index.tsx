import { Description } from '@/components/core/Description';
import { SecondaryLink } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import Title from '@/components/core/Title/Title';
import { APIInfo } from '@/components/templates/APIInfo';
import ErrorModal from '@/components/templates/ErrorModal';
import { InfoBox } from '@/components/templates/InfoBox';
import { Section } from '@/components/templates/Section';
import { Sources } from '@/components/templates/Sources';
import Layout from '@/layout/Layout';
import { formatMilliseconds } from '@/lib/date';
import { getSingleGame } from '@/services/hawapi';
import styles from '@/styles/GameDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function GameDetailsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <GameDetails />
      </div>
    </Layout>
  );
}

function GameDetails() {
  const [isImageSelected, setImageSelected] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    const lang = window.sessionStorage.getItem('language') || language;
    setLanguage(lang);
  }, [language]);

  const { data, error, isLoading } = useSWR(uuid, getSingleGame);

  if (error) return <ErrorModal />;
  if (isLoading || !data?.data) return <Loading />;

  const getEmbedUrl = (url: string) => {
    const params = new URL(url).searchParams;

    return 'https://www.youtube.com/embed/' + params.get('v');
  };

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
          alt={data.data.name}
          className={styles.thumbnail}
          height={0}
          width={0}
        />
      </span>
      <div className={styles.info}>
        <Title value={data.data.name} />
        <Description value={data.data.description} />
        <InfoBox.Root title="About:">
          <InfoBox.Item
            icon="mingcute:game-2-fill"
            name="Mode"
            value={`${data.data.modes.join(', ')}`}
          />
          {data.data.playtime && (
            <InfoBox.Item
              icon="ic:baseline-access-time"
              name="Play time"
              value={`${formatMilliseconds(data.data.playtime ?? 0)}`}
            />
          )}
          <InfoBox.Item
            icon="ic:baseline-device-unknown"
            name="Platforms"
            value={`${data.data.platforms.join(', ')}`}
          />
          <InfoBox.Item
            icon="tabler:rating-12-plus"
            name="Age rating"
            value={data.data.age_rating}
          />
          <InfoBox.Item
            icon="ic:baseline-developer-board"
            name="Developers"
            value={data.data.developers.join(', ')}
          />
          <InfoBox.Item
            icon="ic:baseline-publish"
            name="Publishers"
            value={data.data.publishers.join(', ')}
          />
          <InfoBox.Item
            icon="ic:baseline-date-range"
            name="Release date"
            value={data.data.release_date}
          />
        </InfoBox.Root>
        {data.data.genres && (
          <Section.Root title="Genres:">
            <Section.Flex>
              {data.data.genres.map((item, key) => {
                return (
                  <span key={key} className={styles.genre}>
                    {item}
                  </span>
                );
              })}
            </Section.Flex>
          </Section.Root>
        )}
        {data.data.tags && (
          <Section.Root title="Tags:">
            <Section.Flex>
              {data.data.tags.map((item, key) => {
                return (
                  <span key={key} className={styles.genre}>
                    {item}
                  </span>
                );
              })}
            </Section.Flex>
          </Section.Root>
        )}
        {data.data.stores && (
          <Section.Root title="Stores:">
            <Section.Grid gridMin="10rem">
              {data.data.stores.map((item, key) => {
                const url = new URL(item);
                return <SecondaryLink key={key} href={item} name={url.host} />;
              })}
            </Section.Grid>
          </Section.Root>
        )}
        {data.data.trailer && (
          <iframe
            width="560"
            height="315"
            src={getEmbedUrl(data.data.trailer)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
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
