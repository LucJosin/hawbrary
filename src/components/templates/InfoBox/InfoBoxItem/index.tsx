import SimpleIcon from '@/components/core/SimpleIcon';
import styles from './InfoBoxItem.module.css';

interface Props {
  icon: string;
  name: string;
  value: string;
}

export default function InfoBoxItem({ icon, name, value }: Props) {
  return (
    <span className={styles.item}>
      <SimpleIcon icon={icon} size="20" />
      {`${name}: ${value}`}
    </span>
  );
}
