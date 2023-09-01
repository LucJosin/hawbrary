import { Card } from '@/components/core/Card';
import { Pagination } from '@/components/core/Pagination';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import { getAllEpisodes } from '@/lib/hawapi';
import styles from '@/styles/MorePage.module.css';
import type { ReactNode } from 'react';
import { useState } from 'react';
import useSWR from 'swr';

export default function MorePage() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`actors?page=${page}`, () => {
    return getAllEpisodes({ page });
  });

  const pageComponents = () => {
    const pagesNodes: ReactNode[] = [];
    for (let i = 0; i < (data?.page_total ?? 0); i++) {
      const page = i + 1;
      pagesNodes.push(
        <Pagination.Page
          key={page}
          name={`${page}`}
          isSelected={data?.page === page}
        />
      );
    }
    return pagesNodes;
  };

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
          <Pagination.Page
            icon="ic:round-navigate-before"
            onClick={() => {
              if (page !== 1) setPage(page - 1);
            }}
          />
          {pageComponents()}
          <Pagination.Page
            icon="ic:round-navigate-next"
            onClick={() => {
              if (page !== data?.page_total) setPage(page + 1);
            }}
          />
        </Pagination.Root>
      </div>
    </Fallback.Layout>
  );
}
