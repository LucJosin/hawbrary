import { getDetailsUrlFromHref } from '@/lib/url';
import { Link } from '../../core/Link';
import styles from './Reference.module.css';

interface Props {
  title: string;
  target: string;
  data: string[];
}

export default function Reference({ title, target, data }: Props) {
  return (
    <>
      <h3>{title}</h3>
      <div className={styles.reference}>
        {data.map((item, key) => {
          return (
            <Link.Secondary
              key={key}
              href={getDetailsUrlFromHref(target, item)}
              name={`${title.slice(0, -2)} ${key + 1}`}
              isLocal={true}
            />
          );
        })}
      </div>
    </>
  );
}
