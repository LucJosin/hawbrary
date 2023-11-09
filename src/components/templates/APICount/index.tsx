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
        <a
          className={styles['api-count-item']}
          href="#actors"
          title="HawAPI count for 'actors'"
        >
          Actors: {dataCount.actors}
        </a>
        <a
          className={styles['api-count-item']}
          href="#characters"
          title="HawAPI count for 'characters'"
        >
          Characters: {dataCount.characters}
        </a>
        <a
          className={styles['api-count-item']}
          href="#episodes"
          title="HawAPI count for 'episodes'"
        >
          Episodes: {dataCount.episodes}
        </a>
        <a
          className={styles['api-count-item']}
          href="#seasons"
          title="HawAPI count for 'seasons'"
        >
          Seasons: {dataCount.seasons}
        </a>
        <a
          className={styles['api-count-item']}
          href="#locations"
          title="HawAPI count for 'locations'"
        >
          Locations: {dataCount.locations}
        </a>
        <a
          className={styles['api-count-item']}
          href="#games"
          title="HawAPI count for 'games'"
        >
          Games: {dataCount.games}
        </a>
      </div>
    </div>
  );
}
