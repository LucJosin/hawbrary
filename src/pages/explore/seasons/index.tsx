import { Card } from '@/components/core/Card';
import { Title } from '@/components/core/Title';
import { Fallback } from '@/components/templates/Fallback';
import Grid from '@/components/templates/Grid';
import Layout from '@/layout/Layout';
import { getAllSeasons } from '@/lib/hawapi';
import { getDetailsUrl } from '@/lib/url';
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
        <Title.Simple text="Locations" />
        <Fallback.Root
          isLoading={isLoading}
          hasData={!(error || data?.status !== 200)}
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
