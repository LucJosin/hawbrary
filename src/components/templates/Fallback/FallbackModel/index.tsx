import { useRouter } from 'next/router';
import { Link } from '../../../core/Link';
import styles from './FallbackModel.module.css';

interface Props {
  message?: string;
}

export default function FallbackModel({ message }: Props) {
  const router = useRouter();
  const report = {
    url: 'https://github.com/LucJosin/hawbrary/issues/new',
    title: `${encodeURI('[Explorer]: The requested URL was not found')}`,
    assignees: 'LucJosin',
    labels: 'bug',
    body: `${encodeURI(`Path: ${router.asPath}`)}`,
  };
  return (
    <div className={styles.fallback}>
      <h2>{message ?? 'Something went wrong!'}</h2>
      <span className={styles.options}>
        <Link.Primary href="/explore" isLocal={true} name="Go to explorer" />
      </span>
      <span className={styles.report}>
        Something is wrong?{' '}
        <Link.Simple
          href={`${report.url}?title=${report.title}&assignees=${report.assignees}&labels=${report.labels}&body=${report.body}`}
          name="Report error"
        />
      </span>
    </div>
  );
}
