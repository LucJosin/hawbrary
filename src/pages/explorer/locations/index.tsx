import { HorizontalCard } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import Title from '@/components/core/Title/Title';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllLocations } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Title value="Locations" />
        <LocationItems />
      </div>
    </Layout>
  );
}

function LocationItems() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`locations?page=${page}`, () => {
    return getAllLocations({ page });
  });

  if (error) return <ErrorModal />;
  if (isLoading) return <Loading />;

  return (
    <>
      <Grid min="32rem">
        {data?.data?.map((item, key) => {
          return (
            <HorizontalCard
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
      {data && <Pagination.Root page={page} data={data} setPage={setPage} />}
    </>
  );
}
