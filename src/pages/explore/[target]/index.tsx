import { PATHS } from '@/constants';
import Layout from '@/layout/Layout';
import type { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface Props {
  target: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Actors({ target }: Props) {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(
    uuid ? `http://localhost:8080/api/v1/${target}/${uuid}` : undefined,
    fetcher
  );

  return (
    <Layout>
      {error || (data && data['code'] && <p>Failed to load</p>)}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{data !== undefined ? data.first_name : 'Error'}</p>
      )}
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      target: context.params!.target,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = [];

  for (let i = 0; i < PATHS.length; i++) {
    paths.push({ params: { target: PATHS[i] } });
  }

  return { paths, fallback: false };
};
