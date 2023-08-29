import { Link } from '@/components/core/Link';
import { Fallback } from '@/components/templates/Fallback';
import { getSingleEpisode } from '@/services/hawapi';
import styles from '@/styles/EpisodeDetailsPage.module.css';
import { getUuidFromHref } from '@/utils';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function EpisodeDetailsPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleEpisode);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={error || data !== undefined}
    >
      <div className={styles.content}>
        <div className={styles.container}>
          <Image
            src={data?.data?.thumbnail ?? ''}
            alt={data?.data?.title ?? ''}
            className={styles.image}
            height={0}
            width={0}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.data?.title}</h1>
          <p>{data?.data?.description}</p>
          <span className={styles.information}>
            <Icon icon="ic:baseline-place" width="18" />
            {`Episode Nº: ${data?.data?.episode_num}`}
          </span>
          <span className={styles.information}>
            <Icon icon="mdi:birthday-cake-outline" width="18" />
            {`Duration: ${data?.data?.duration}`}
          </span>
          <div className={styles.episodes}>
            <h3>Episodes: </h3>
            <span className={styles.eps}>
              {data?.data?.prev_episode && (
                <Link.Primary
                  href={`/explore/episodes/details/?uuid=${getUuidFromHref(
                    data?.data?.prev_episode
                  )}`}
                  name="Prev episode"
                  isLocal={true}
                />
              )}
              {data?.data?.next_episode && (
                <Link.Primary
                  href={`/explore/episodes/details/?uuid=${getUuidFromHref(
                    data?.data?.next_episode
                  )}`}
                  name="Next episode"
                  isLocal={true}
                />
              )}
            </span>
          </div>
          <div className={styles.season}>
            <h3>Season:</h3>
            <span className={styles.seas}>
              {data?.data?.season && (
                <Link.Primary
                  href={`/explore/seasons/details/?uuid=${getUuidFromHref(
                    data?.data?.season
                  )}`}
                  name="See season"
                  isLocal={true}
                />
              )}
            </span>
          </div>
          <div className={styles.sources}>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
          </div>
        </div>
      </div>
    </Fallback.Layout>
  );
}
