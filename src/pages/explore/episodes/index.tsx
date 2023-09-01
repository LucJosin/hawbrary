import { Card } from '@/components/core/Card';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllEpisodes } from '@/lib/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`episodes?page=${page}`, () => {
    return getAllEpisodes({ page });
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Episodes" />
        <Fallback.Root
          isLoading={isLoading}
          hasData={!(error || data?.status !== 200)}
        >
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
        </Fallback.Root>
        {data && <Pagination.Root page={page} data={data} setPage={setPage} />}
      </div>
    </Layout>
  );
}
