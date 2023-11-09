import { VerticalCard } from '@/components/core/Card';
import Loading from '@/components/core/Loading';
import { Title } from '@/components/core/Title';
import ErrorModal from '@/components/templates/ErrorModal';
import Grid from '@/components/templates/Grid';
import Layout from '@/layout/Layout';
import { getDetailsUrl } from '@/lib/url';
import { getAllGames } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function MorePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Games" />
        <GameItems />
      </div>
    </Layout>
  );
}

function GameItems() {
  const { data, error, isLoading } = useSWR(`games`, () => {
    return getAllGames();
  });

  if (error) return <ErrorModal />;
  if (isLoading) return <Loading />;

  return (
    <Grid>
      {data?.data?.map((item, key) => {
        return (
          <Link key={key} href={getDetailsUrl('games', item.uuid)}>
            <VerticalCard
              title={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          </Link>
        );
      })}
    </Grid>
  );
}
