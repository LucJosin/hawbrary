import { Card } from '@/components/core/Card';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllLocations } from '@/lib/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`locations?page=${page}`, () => {
    return getAllLocations({ page });
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Locations" />
        <Fallback.Root
          isLoading={isLoading}
          hasData={!(error || data?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          <Grid min="32rem">
            {data?.data?.map((item, key) => {
              return (
                <Card.Horizontal
                  key={key}
                  uuid={item.uuid}
                  target="locations"
                  title={item.name}
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
