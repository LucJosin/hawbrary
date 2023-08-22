import Card from '@/components/core/Card';
import { PATHS } from '@/constants';
import Layout from '@/layout/Layout';
import styles from '@/styles/Items.module.css';
import type { GetStaticPropsContext } from 'next';

export default function Items() {
  return (
    <Layout>
      <div className={styles.items}>
        <Card
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/x3zIV.jpg"
        />
        <Card
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      target: context.params!.target,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = [];

  for (let i = 0; i < PATHS.length; i++) {
    paths.push({ params: { target: PATHS[i] } });
  }

  return { paths, fallback: false };
};
