import SimpleIcon from '@/components/core/SimpleIcon';
import styles from './PaginationItem.module.css';

interface Props {
  name?: string;
  icon?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function PaginationItem({
  name,
  icon,
  isSelected = false,
  onClick,
}: Props) {
  return (
    <span
      className={isSelected ? styles.selectedBox : styles.box}
      onClick={onClick}
    >
      {name || <SimpleIcon icon={icon!} size="16" />}
    </span>
  );
}
