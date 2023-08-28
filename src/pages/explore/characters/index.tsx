import { Card } from '@/components/core/Card';
import FallbackLayout from '@/layout/FallbackLayout';
import { getAllCharacters } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('characters', getAllCharacters);

  return (
    <FallbackLayout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <Card.Person
              key={key}
              uuid={item.uuid}
              target="characters"
              name={item.first_name + ' ' + item.last_name}
              description={[
                `Gender: ${item.gender}`,
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
