import PrimaryButton from '@/components/core/PrimaryButton';
import SecondaryButton from '@/components/core/SecondaryButton';
import FallbackLayout from '@/layout/FallbackLayout';
import { getSingleSeason } from '@/services/hawapi';
import styles from '@/styles/SeasonDetailsPage.module.css';
import { getUuidFromHref } from '@/utils';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function SeasonDetailsPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleSeason);

  return (
    <FallbackLayout isLoading={isLoading} hasData={error || data !== undefined}>
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
          <p className={styles.description}>{data?.data?.description}</p>
          <span className={styles.genres}>
            {data?.data?.genres.map((item, key) => {
              return (
                <span key={key} className={styles.genre}>
                  {item}
                </span>
              );
            })}
          </span>
          <span className={styles.information}>
            <Icon icon="system-uicons:episodes" width="18" />
            {`Season: ${data?.data?.season_num}`}
          </span>
          <span className={styles.information}>
            <Icon icon="ic:baseline-access-time" width="18" />
            {`Watch time: ${data?.data?.duration_total}`}
          </span>
          <span className={styles.information}>
            <Icon icon="ic:baseline-attach-money" width="18" />
            {`Budget: ${data?.data?.budget}`}
          </span>
          <div className={styles.episodes}>
            <h3>Episodes: </h3>
            <span className={styles.eps}>
              {data?.data?.episodes.map((item, key) => {
                return (
                  <SecondaryButton
                    key={key}
                    href={`/explore/episodes/details/?uuid=${getUuidFromHref(
                      item
                    )}`}
                    name={`Episode ${key + 1}`}
                    isLocal={true}
                  />
                );
              })}
            </span>
          </div>
          <div className={styles.seasons}>
            <h3>Seasons: </h3>
            <span className={styles.seas}>
              {data?.data?.prev_season && (
                <PrimaryButton
                  href={`/explore/seasons/details/?uuid=${getUuidFromHref(
                    data?.data?.prev_season
                  )}`}
                  name="Prev season"
                  isLocal={true}
                />
              )}
              {data?.data?.next_season && (
                <PrimaryButton
                  href={`/explore/seasons/details/?uuid=${getUuidFromHref(
                    data?.data?.next_season
                  )}`}
                  name="Next season"
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
    </FallbackLayout>
  );
}
