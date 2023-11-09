import { PersonCard } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import { Title } from '@/components/core/Title';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllActors } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Actors" />
        <ActorItems />
      </div>
    </Layout>
  );
}

function ActorItems() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`actors?page=${page}`, () => {
    return getAllActors({ page });
  });

  if (error) return <ErrorModal />;
  if (isLoading) return <Loading />;

  return (
    <>
      <Grid>
        {data?.data?.map((item, key) => {
          return (
            <PersonCard
              key={key}
              uuid={item.uuid}
              target="actors"
              name={item.first_name + ' ' + item.last_name}
              description={[
                `Nationality: ${item.nationality}`,
                `Birth Date: ${item.birth_date}`,
              ]}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </Grid>
      {data && <Pagination.Root page={page} data={data} setPage={setPage} />}
    </>
  );
}
