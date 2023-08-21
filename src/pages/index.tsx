import BaseLink from '@/components/core/BaseLink';
import PrimaryButton from '@/components/core/PrimaryButton';
import SecondaryButton from '@/components/core/SecondaryButton';
import TextEffect from '@/components/core/TextEffect';
import Layout from '@/layout/Layout';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout isCentered={true}>
      <TextEffect title="Hawbrary" size="8rem" />
      <p>
        A Showcase for the{' '}
        <BaseLink href="https://github.com/HawAPI/HawAPI" name="HawAPI" />{' '}
        project
      </p>
      <span className={styles.links}>
        <PrimaryButton href="/explore" isLocal={true} name="Explore" />
        <SecondaryButton
          href="https://github.com/LucJosin/hawbrary"
          name="Github"
        />
      </span>
    </Layout>
  );
}
