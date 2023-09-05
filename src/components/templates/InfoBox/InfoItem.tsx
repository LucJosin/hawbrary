import styles from '@/styles/InfoItem.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';

interface Props {
  icon: string;
  name: string;
  value: string;
}

export default function InfoItem({ icon, name, value }: Props) {
  return (
    <span className={styles.item}>
      <Icon icon={icon} />
      {`${name}: ${value}`}
    </span>
  );
}
