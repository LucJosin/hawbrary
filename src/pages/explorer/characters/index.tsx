import { PersonCard } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import SimpleTitle from '@/components/core/Title/SimpleTitle';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getGender } from '@/lib/utils';
import { getAllCharacters } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <SimpleTitle text="Characters" />
        <CharacterItems />
      </div>
    </Layout>
  );
}

function CharacterItems() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`characters?page=${page}`, () => {
    return getAllCharacters({ page });
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
              target="characters"
              name={item.first_name + ' ' + item.last_name}
              description={[
                `Gender: ${getGender(item.gender)}`,
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
