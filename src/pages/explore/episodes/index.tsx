import { Card } from '@/components/core/Card';
import { Pagination } from '@/components/core/Pagination';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import { getAllEpisodes } from '@/lib/hawapi';
import styles from '@/styles/MorePage.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`actors?page=${page}`, () => {
    return getAllEpisodes({ page });
  });

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.container}>
        <Title.Simple text="Episodes" />
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
        <Pagination.Root>
          {data?.prev_page && (
            <Pagination.Page name="Prev" onClick={() => setPage(page - 1)} />
          )}
          <Pagination.Page name={`${data?.page}`} isSelected={true} />
          {data?.page_total !== page && (
            <>
              <span>...</span>
              <Pagination.Page name={`${data?.page_total}`} />
            </>
          )}
          {data?.next_page && data?.page_total !== page && (
            <Pagination.Page name="Next" onClick={() => setPage(page + 1)} />
          )}
        </Pagination.Root>
      </div>
    </Fallback.Layout>
  );
}
