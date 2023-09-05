import { Link } from '../../core/Link';
import styles from './Sources.module.css';

interface Props {
  sources: string[];
}

export function Sources({ sources }: Props) {
  return (
    <>
      <h3>Sources:</h3>
      <div className={styles.sources}>
        {sources.map((item, key) => {
          const url = new URL(item);
          return <Link.Secondary key={key} href={item} name={url.host} />;
        })}
      </div>
    </>
  );
}
