import { Description } from '@/components/core/Description';
import { SecondaryLink } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import Title from '@/components/core/Title/Title';
import Reference from '@/components/data/Reference';
import { APIInfo } from '@/components/templates/APIInfo';
import ErrorModal from '@/components/templates/ErrorModal';
import { InfoBox } from '@/components/templates/InfoBox';
import { Section } from '@/components/templates/Section';
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

  const prevSeasonHref = getDetailsUrlFromHref(
    'seasons',
    data.data.prev_season
  );
  const nextSeasonHref = getDetailsUrlFromHref(
    'seasons',
    data.data.next_season
  );

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
        <Title value={data.data.title} />
        <Description value={data.data.description} />
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
        <Section.Root title="Seasons:">
          <Section.Grid gridMin="8rem">
            {prevSeasonHref && (
              <SecondaryLink
                href={prevSeasonHref}
                name="Prev season"
                isLocal={true}
              />
            )}
            {nextSeasonHref && (
              <SecondaryLink
                href={nextSeasonHref}
                name="Next season"
                isLocal={true}
              />
            )}
          </Section.Grid>
        </Section.Root>
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
