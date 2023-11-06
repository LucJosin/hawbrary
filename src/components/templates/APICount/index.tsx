import styles from './APICount.module.css';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataCount: any;
  title?: string;
}

export function APICount({ dataCount, title }: Props) {
  return (
    <div className={styles['api-count-container']}>
      {title && <h3>{title}</h3>}

      <div className={styles['api-count-data']}>
        <span className={styles['api-count-item']}>
          Actors: {dataCount.actors}
        </span>
        <span className={styles['api-count-item']}>
          Characters: {dataCount.characters}
        </span>
        <span className={styles['api-count-item']}>
          Episodes: {dataCount.episodes}
        </span>
        <span className={styles['api-count-item']}>
          Seasons: {dataCount.seasons}
        </span>
        <span className={styles['api-count-item']}>
          Locations: {dataCount.locations}
        </span>
        <span className={styles['api-count-item']}>
          Games: {dataCount.games}
        </span>
      </div>
    </div>
  );
}
