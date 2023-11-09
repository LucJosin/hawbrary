import { Icon } from '@iconify-icon/react/dist/iconify.js';
import styles from './InfoBoxItem.module.css';

interface Props {
  icon: string;
  name: string;
  value: string;
}

export default function InfoBoxItem({ icon, name, value }: Props) {
  return (
    <span className={styles.item}>
      <Icon icon={icon} width={20} className={styles.icon} />
      {`${name}: ${value}`}
    </span>
  );
}
