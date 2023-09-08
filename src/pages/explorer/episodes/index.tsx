import { Card } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import { Title } from '@/components/core/Title';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllEpisodes } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Episodes" />
        <EpisodeItems />
      </div>
    </Layout>
  );
}

function EpisodeItems() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { season_uuid } = router.query;

  let filter: string;
  let key: string = `episodes?page=${page}`;

  // Season uuid will have precedence over uuid
  if (season_uuid) {
    key = `episodes?season=${season_uuid}`;
    filter = '*' + season_uuid;
  }

  const { data, error, isLoading } = useSWR(key, () => {
    return getAllEpisodes({ page }, { ...(season_uuid && { season: filter }) });
  });

  if (error) return <ErrorModal />;
  if (isLoading) return <Loading />;

  return (
    <>
      <Grid>
        {data?.data?.map((item, key) => {
          return (
            <Card.Simple
              key={key}
              uuid={item.uuid}
              target="episodes"
              title={`${item.title} - Ep.${item.episode_num}`}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </Grid>
      {data && <Pagination.Root page={page} data={data} setPage={setPage} />}
    </>
  );
}
