import { Card } from '@/components/core/Card';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import { Pagination } from '@/components/templates/Pagination';
import Layout from '@/layout/Layout';
import { getAllCharacters } from '@/lib/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`characters?page=${page}`, () => {
    return getAllCharacters({ page });
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Characters" />
        <Fallback.Root
          isLoading={isLoading}
          hasData={!(error || data?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          <Grid>
            {data?.data?.map((item, key) => {
              return (
                <Card.Person
                  key={key}
                  uuid={item.uuid}
                  target="characters"
                  name={item.first_name + ' ' + item.last_name}
                  description={[
                    `Gender: ${item.gender}`,
                    `Birth Date: ${item.birth_date}`,
                  ]}
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
