import { Card } from '@/components/core/Card';
import FallbackLayout from '@/layout/FallbackLayout';
import { getAllEpisodes } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('episodes', getAllEpisodes);

  return (
    <FallbackLayout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <Link
              key={key}
              href={`/explore/episodes/details/?uuid=${item.uuid}`}
            >
              <Card.Simple
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            </Link>
          );
        })}
      </div>
    </FallbackLayout>
  );
}
