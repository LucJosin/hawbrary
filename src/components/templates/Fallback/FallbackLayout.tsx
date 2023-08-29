import type { ReactNode } from 'react';
import Layout from '../../../layout/Layout';
import FallbackRoot from './FallbackRoot';

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  hasData?: boolean;
}

export default function FallbackLayout({
  children,
  isLoading,
  hasData = false,
}: Props) {
  return (
    <Layout isCentered={true}>
      <FallbackRoot isLoading={isLoading} hasData={hasData}>
        {children}
      </FallbackRoot>
    </Layout>
  );
}
