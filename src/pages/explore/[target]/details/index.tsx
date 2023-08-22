import Layout from '@/layout/Layout';
import styles from '@/styles/DetailsPage.module.css';

export default function DetailsPage() {
  return (
    <Layout>
      <div className={styles.details}></div>
    </Layout>
  );
}

function ActorDetails() {
  return <div></div>;
}
