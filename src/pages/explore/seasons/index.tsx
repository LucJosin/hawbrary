import { Card } from '@/components/core/Card';
import { Fallback } from '@/components/templates/Fallback';
import { getAllSeasons } from '@/lib/hawapi';
import styles from '@/styles/Items.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('seasons', getAllSeasons);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <Link
              key={key}
              href={`/explore/seasons/details/?uuid=${item.uuid}`}
            >
              <Card.Vertical
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            </Link>
          );
        })}
      </div>
    </Fallback.Layout>
  );
}
