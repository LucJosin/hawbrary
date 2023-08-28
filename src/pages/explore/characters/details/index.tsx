import PrimaryButton from '@/components/core/PrimaryButton';
import FallbackLayout from '@/layout/FallbackLayout';
import { getSingleCharacter } from '@/services/hawapi';
import styles from '@/styles/CharacterDetailsPage.module.css';
import { getUuidFromHref } from '@/utils';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function CharacterDetailsPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleCharacter);

  return (
    <FallbackLayout isLoading={isLoading} hasData={error || data !== undefined}>
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
          <div className={styles.actor}>
            <h2>Actor:</h2>
            <PrimaryButton
              href={`/explore/characters/details/?uuid=${getUuidFromHref(
                data?.data?.actor ?? ''
              )}`}
              name="See actor"
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
    </FallbackLayout>
  );
}
