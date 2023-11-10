import { SecondaryLink } from '@/components/core/Link';
import { getDetailsUrlFromHref } from '@/lib/url';
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
          if (item == null) return;

          const href = getDetailsUrlFromHref(target, item);
          if (href == null) return;

          return (
            <SecondaryLink
              key={key}
              href={href}
              name={`${title.slice(0, -2)} ${key + 1}`}
              isLocal={true}
            />
          );
        })}
      </div>
    </>
  );
}
