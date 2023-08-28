import FallbackLayout from '@/layout/FallbackLayout';
import { getSingleLocation } from '@/services/hawapi';
import styles from '@/styles/LocationDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function LocationDetailsPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleLocation);

  return (
    <FallbackLayout isLoading={isLoading} hasData={error || data !== undefined}>
      <div className={styles.content}>
        <div className={styles.container}>
          <Image
            src={data?.data?.thumbnail ?? ''}
            alt={data?.data?.name ?? ''}
            className={styles.image}
            height={0}
            width={0}
          />
          <span className={styles.list}>
            {data?.data?.images.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item}
                  alt={`Image ${key}`}
                  className={styles.mini}
                  height={0}
                  width={0}
                />
              );
            })}
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.data?.name}</h1>
          <p className={styles.description}>{data?.data?.description}</p>
          <div className={styles.sources}>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
          </div>
        </div>
      </div>
    </FallbackLayout>
  );
}
