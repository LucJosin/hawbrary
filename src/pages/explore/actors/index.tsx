import PersonCard from '@/components/core/PersonCard';
import FallbackLayout from '@/layout/FallbackLayout';
import { getAllActors } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('actors', getAllActors);

  return (
    <FallbackLayout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <PersonCard
              key={key}
              uuid={item.uuid}
              target="actors"
              name={item.first_name + ' ' + item.last_name}
              description={[
                `Nationality: ${item.nationality}`,
                `Birth Date: ${item.birth_date}`,
              ]}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </FallbackLayout>
  );
}
