import { Icon } from '@iconify-icon/react/dist/iconify.js';

interface Props {
  icon: string;
  size?: string;
  margin?: string;
}

export default function SimpleIcon({
  icon,
  size = '18',
  margin = '0 0.2rem',
}: Props) {
  return (
    <Icon
      icon={icon}
      width={size}
      style={{
        display: 'flex',
        alignItems: 'center',
        margin,
      }}
    />
  );
}
