import { Icon } from '@iconify-icon/react/dist/iconify.js';
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
      {name || <Icon icon={icon!} width="16" />}
    </span>
  );
}
