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
import { getSingleEpisode } from '@/services/hawapi';
import styles from '@/styles/EpisodeDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function EpisodeDetailsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <EpisodeDetails />
      </div>
    </Layout>
  );
}

function EpisodeDetails() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleEpisode);

  if (error) return <ErrorModal />;
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
      <div className={styles.avatar}>
        <Image
          src={data.data.thumbnail}
          alt={data.data.title}
          className={styles.thumbnail}
          height={0}
          width={0}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          {`${data.data.title} - Ep.${data.data.episode_num}`}
        </h1>
        <p>{data.data.description}</p>
        <InfoBox.Root title="About:">
          <InfoBox.Item
            icon="ic:baseline-place"
            name="Episode"
            value={`${data.data.episode_num}`}
          />
          <InfoBox.Item
            icon="mdi:birthday-cake-outline"
            name="Duration"
            value={`${formatMilliseconds(data.data.duration)}`}
          />
        </InfoBox.Root>
        <Reference
          title="Episodes:"
          target="episodes"
          data={[data.data.prev_episode, data.data.next_episode]}
        />
        <h3>Season:</h3>
        <div className={styles.season}>
          <span className={styles.seas}>
            {data.data.season && (
              <SecondaryLink
                href={getDetailsUrlFromHref('seasons', data.data.season)}
                name="See season"
                isLocal={true}
              />
            )}
          </span>
        </div>
        <Sources sources={data.data.sources ?? []} />
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
