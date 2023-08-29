interface Props {
  message?: string;
}

export default function FallbackText({ message }: Props) {
  return <>{message ?? 'Something went wrong!'}</>;
}
