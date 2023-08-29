import { Link as HLink } from '@/components/core/Link';
import { Fallback } from '@/components/templates/Fallback';
import { getSingleActor } from '@/services/hawapi';
import styles from '@/styles/ActorDetailsPage.module.css';
import { getUuidFromHref } from '@/utils';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function ActorDetailsPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleActor);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={error || data !== undefined}
    >
      <div className={styles.content}>
        <div className={styles.images}>
          <Image
            src={data?.data?.thumbnail ?? ''}
            alt={data?.data?.first_name ?? ''}
            className={styles.avatar}
            height={0}
            width={0}
          />
          <span className={styles.list}>
            {data?.data?.images.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item}
                  alt={data?.data?.first_name ?? ''}
                  className={styles.image}
                  height={0}
                  width={0}
                />
              );
            })}
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data?.data?.first_name + ' ' + data?.data?.last_name}
          </h1>
          <span className={styles.nicknames}>
            {data?.data?.nicknames &&
              data?.data?.nicknames.map((item, key) => {
                return (
                  <span key={key} className={styles.nick}>
                    {item}
                  </span>
                );
              })}
          </span>
          <span className={styles.information}>
            <Icon icon="ic:baseline-place" width="18" />
            {`Nationality: ${data?.data?.nationality}`}
          </span>
          <span className={styles.information}>
            <Icon icon="mdi:birthday-cake-outline" width="18" />
            {`Birth Date: ${data?.data?.birth_date}`}
          </span>
          {data?.data?.death_date && (
            <span className={styles.information}>
              <Icon icon="mdi:coffin" width="18" />
              {`Death Date: ${data?.data?.death_date}`}
            </span>
          )}
          <span className={styles.information}>
            <Icon icon="icons8:gender" width="18" />
            {`Gender: ${data?.data?.gender}`}
          </span>
          <div className={styles.socials}>
            {data?.data?.socials &&
              data?.data?.socials.map((item, key) => {
                return (
                  <Link
                    key={key}
                    href={item.url}
                    title={item.social + ` (${item.handle})`}
                    target="_blank"
                  >
                    <span className={styles.social}>
                      <Icon
                        icon={`simple-icons:${item.social.toLocaleLowerCase()}`}
                        width="18"
                      />
                      {item.social}
                    </span>
                  </Link>
                );
              })}
          </div>
          <div className={styles.character}>
            <h2>Character:</h2>
            <HLink.Primary
              href={`/explore/characters/details/?uuid=${getUuidFromHref(
                data?.data?.character ?? ''
              )}`}
              name="See character"
            />
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
