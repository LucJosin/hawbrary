import { Card } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import { Title } from '@/components/core/Title';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import Layout from '@/layout/Layout';
import { getDetailsUrl } from '@/lib/url';
import { getAllSeasons } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Seasons" />
        <SeasonItems />
      </div>
    </Layout>
  );
}

function SeasonItems() {
  const { data, error, isLoading } = useSWR(`seasons`, () => {
    return getAllSeasons();
  });

  if (error) return <ErrorModal />;
  if (isLoading) return <Loading />;

  return (
    <Grid>
      {data?.data?.map((item, key) => {
        return (
          <Link key={key} href={getDetailsUrl('seasons', item.uuid)}>
            <Card.Vertical
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          </Link>
        );
      })}
    </Grid>
  );
}
