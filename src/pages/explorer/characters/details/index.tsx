import { Link } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import { APIInfo } from '@/components/templates/APIInfo';
import ErrorModal from '@/components/templates/ErrorModal';
import { InfoBox } from '@/components/templates/InfoBox';
import { Sources } from '@/components/templates/Sources';
import Layout from '@/layout/Layout';
import { getAge } from '@/lib/date';
import { getDetailsUrlFromHref } from '@/lib/url';
import { getGender } from '@/lib/utils';
import { getSingleCharacter } from '@/services/hawapi';
import styles from '@/styles/CharacterDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function CharacterDetailsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <CharacterDetails />
      </div>
    </Layout>
  );
}

function CharacterDetails() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleCharacter);

  if (error) return <ErrorModal />;
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
      <div className={styles.images}>
        <div className={styles.avatar}>
          <Image
            src={data.data.thumbnail}
            height={0}
            width={0}
            alt={data.data.first_name}
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.grid}>
          {data.data.images &&
            data.data.images.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item}
                  height={0}
                  width={0}
                  alt={'Image ' + key}
                  className={styles.mini}
                />
              );
            })}
        </div>
      </div>
      <div className={styles.info}>
        <h1>{`${data.data.first_name} ${data.data.last_name}`}</h1>
        <Link.Secondary
          href={getDetailsUrlFromHref('actors', data.data.actor)}
          name="See Actor"
          isLocal={true}
        />
        <InfoBox.Root title="About:">
          <InfoBox.Item
            icon="mdi:calendar-range"
            name="Age"
            value={`${getAge(data.data.birth_date, '1983')} (${getAge(
              data.data.birth_date
            )} today)`}
          />
          <InfoBox.Item
            icon="mdi:account"
            name="Gender"
            value={`${getGender(data.data.gender)}`}
          />
          <InfoBox.Item
            icon="mdi:cake-variant-outline"
            name="Birth Date"
            value={data.data.birth_date}
          />
          {data.data.death_date && (
            <InfoBox.Item
              icon="mdi:cake-variant-outline"
              name="Birth Date"
              value={data.data.death_date}
            />
          )}
        </InfoBox.Root>
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
