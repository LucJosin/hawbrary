import { Card } from '@/components/core/Card';
import { Fallback } from '@/components/templates/Fallback';
import { getAllEpisodes } from '@/lib/hawapi';
import styles from '@/styles/Items.module.css';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('episodes', getAllEpisodes);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <Card.Simple
              key={key}
              uuid={item.uuid}
              target="episodes"
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </Fallback.Layout>
  );
}
