import { Link } from '@/components/core/Link';
import EffectTitle from '@/components/core/Title/EffectTitle';
import Layout from '@/layout/Layout';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout isCentered={true}>
      <EffectTitle title="Hawbrary" size="8rem" />
      <p>
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
