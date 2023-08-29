import { Card } from '@/components/core/Card';
import { Fallback } from '@/components/templates/Fallback';
import { getAllLocations } from '@/lib/hawapi';
import styles from '@/styles/Items.module.css';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('locations', getAllLocations);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
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
      </div>
    </Fallback.Layout>
  );
}
