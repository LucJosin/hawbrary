import HorizontalCard from '@/components/core/HorizontalCard';
import FallbackLayout from '@/layout/FallbackLayout';
import { getAllLocations } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('locations', getAllLocations);

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
              href={`/explore/locations/details/?uuid=${item.uuid}`}
            >
              <HorizontalCard
                title={item.name}
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
