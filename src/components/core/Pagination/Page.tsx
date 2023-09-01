import styles from '@/styles/Page.module.css';

interface Props {
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function Page({ name, isSelected = false, onClick }: Props) {
  return (
    <span
      className={isSelected ? styles.selectedBox : styles.box}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
