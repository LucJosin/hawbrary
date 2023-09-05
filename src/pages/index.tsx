import { Link } from '@/components/core/Link';
import { Title } from '@/components/core/Title';
import Layout from '@/layout/Layout';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <Layout isCentered={true}>
      <Title.Effect title="Hawbrary" />
      <p className={styles.description}>
        A Showcase for the{' '}
        <Link.Simple href="https://github.com/HawAPI/HawAPI" name="HawAPI" />{' '}
        project
      </p>
      <span className={styles.links}>
        <Link.Primary href="/explore" isLocal={true} name="Explore" />
        <Link.Secondary
          href="https://github.com/LucJosin/hawbrary"
          name="Github"
        />
      </span>
    </Layout>
  );
}
