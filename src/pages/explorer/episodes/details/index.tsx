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

  const seasonHref = getDetailsUrlFromHref('seasons', data.data.season);

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
        <Title value={`${data.data.title} - Ep.${data.data.episode_num}`} />
        <Description value={data.data.description} />
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
        {seasonHref && (
          <Section.Root title="Season:">
            <SecondaryLink href={seasonHref} name="See season" isLocal={true} />
          </Section.Root>
        )}
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
