import { PrimaryLink, SecondaryLink, SimpleLink } from '@/components/core/Link';
import { Title } from '@/components/core/Title';
import Layout from '@/layout/Layout';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <Layout>
      <Title.Effect title="Hawbrary" />
      <p className={styles.description}>
        A Showcase for the{' '}
        <SimpleLink
          showIcon={false}
          href="https://github.com/HawAPI/HawAPI"
          name="HawAPI"
        />{' '}
        project
      </p>
      <span className={styles.links}>
        <PrimaryLink href="/explorer" isLocal={true} name="Explore" />
        <SecondaryLink
          href="https://github.com/LucJosin/hawbrary"
          name="Github"
        />
      </span>
    </Layout>
  );
}
