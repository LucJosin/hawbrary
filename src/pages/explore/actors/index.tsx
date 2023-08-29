import { Card } from '@/components/core/Card';
import { Fallback } from '@/components/templates/Fallback';
import { getAllActors } from '@/services/hawapi';
import styles from '@/styles/Items.module.css';
import useSWR from 'swr';

export default function Items() {
  const { data, error, isLoading } = useSWR('actors', getAllActors);

  return (
    <Fallback.Layout
      isLoading={isLoading}
      hasData={!(error || data?.status !== 200)}
    >
      <div className={styles.items}>
        {data?.data?.map((item, key) => {
          return (
            <Card.Person
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
    </Fallback.Layout>
  );
}
