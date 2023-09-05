import { Card } from '@/components/core/Card';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import Layout from '@/layout/Layout';
import { getDetailsUrl } from '@/lib/url';
import { getAllSeasons } from '@/services/hawapi';
import styles from '@/styles/MorePage.module.css';
import Link from 'next/link';
import useSWR from 'swr';

export default function MorePage() {
  const { data, error, isLoading } = useSWR(`seasons`, () => {
    return getAllSeasons();
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Title.Simple text="Seasons" />
        <Fallback.Root
          isLoading={isLoading}
          hasData={!(error || data?.status !== 200)}
          fallback={<Fallback.Text />}
        >
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
        </Fallback.Root>
      </div>
    </Layout>
  );
}
