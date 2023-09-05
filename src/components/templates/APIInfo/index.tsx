import { getDayCount } from '@/lib/date';
import { InfoBox } from '../InfoBox';
import styles from './APIInfo.module.css';

interface Props {
  uuid: string;
  href: string;
  createdAt: string;
  updatedAt: string;
}

export function APIInfo({ uuid, href, createdAt, updatedAt }: Props) {
  const formattedCreatedAt = new Date(createdAt).toLocaleDateString();
  const formattedUpdatedAt = new Date(updatedAt).toLocaleDateString();
  return (
    <div className={styles.info}>
      <InfoBox.Root title="API Info:">
        <InfoBox.Item icon="mdi:map-marker-path" name="UUID" value={uuid} />
        <InfoBox.Item icon="mdi:map-marker-path" name="Href" value={href} />
        <InfoBox.Item
          icon="mdi:clock-outline"
          name="Created At"
          value={`${formattedCreatedAt} (${getDayCount(createdAt)} days ago)`}
        />
        <InfoBox.Item
          icon="mdi:update"
          name="Updated At"
          value={`${formattedUpdatedAt} (${getDayCount(updatedAt)} days ago)`}
        />
      </InfoBox.Root>
    </div>
  );
}
