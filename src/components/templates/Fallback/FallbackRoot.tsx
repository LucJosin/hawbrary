import Loading from '@/components/core/Loading';
import type { ReactNode } from 'react';
import FallbackModel from './FallbackModel';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  isLoading?: boolean;
  hasData?: boolean;
}

export default function FallbackRoot({
  children,
  fallback,
  isLoading,
  hasData = false,
}: Props) {
  return (
    <>
      {isLoading && <Loading />}
      {hasData && <>{children}</>}
      {!isLoading && !hasData && (fallback ?? <FallbackModel />)}
    </>
  );
}
