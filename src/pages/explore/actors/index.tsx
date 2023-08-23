import Card from '@/components/core/Card';
import Layout from '@/layout/Layout';
import styles from '@/styles/Items.module.css';

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
