import styles from '@/styles/PaginationRoot.module.css';
import type { BaseModel, RequestResult } from '@hawapi/js-sdk';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Pagination } from '.';

interface Props<T> {
  page: number;
  data: RequestResult<T[]>;
  setPage: Dispatch<SetStateAction<number>>;
}

export function PaginationRoot<T extends BaseModel>({
  page,
  data,
  setPage,
}: Props<T>) {
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
    <div className={styles.pagination}>
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
    </div>
  );
}
