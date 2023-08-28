import VerticalCard from '@/components/core/VerticalCard';
import FallbackLayout from '@/layout/FallbackLayout';
import { getAllSeasons } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('seasons', getAllSeasons);

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
              href={`/explore/seasons/details/?uuid=${item.uuid}`}
            >
              <VerticalCard
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                priButton=""
                priButtonHref=""
                secButton=""
                secButtonHref=""
              />
            </Link>
          );
        })}
      </div>
    </FallbackLayout>
  );
}
