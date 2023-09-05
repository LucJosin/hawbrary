import { APIInfo } from '@/components/templates/APIInfo';
import { Fallback } from '@/components/templates/Fallback';
import { Sources } from '@/components/templates/Sources';
import Layout from '@/layout/Layout';
import { getSingleLocation } from '@/services/hawapi';
import styles from '@/styles/LocationDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

export default function LocationDetailsPage() {
  const [isImageSelected, setImageSelected] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleLocation);

  return (
    <Layout>
      <Fallback.Root
        isLoading={isLoading}
        hasData={error || data !== undefined}
      >
        {data?.data && (
          <div className={styles.container}>
            <span
              className={styles['thumbnail-container']}
              style={{
                height: isImageSelected ? 'fit-content' : '15rem',
                cursor: isImageSelected ? 'zoom-out' : 'zoom-in',
              }}
              onClick={() => {
                setImageSelected(!isImageSelected);
              }}
            >
              <Image
                src={image ?? data.data.thumbnail}
                alt={data.data.name}
                className={styles.thumbnail}
                height={0}
                width={0}
              />
            </span>
            <span className={styles.images}>
              {data.data.images.map((item, key) => {
                return (
                  <span
                    className={styles['image-container']}
                    key={key}
                    onClick={() => {
                      setImage(item);
                    }}
                  >
                    <Image
                      src={item}
                      alt={`Image ${key}`}
                      className={styles.image}
                      height={0}
                      width={0}
                    />
                  </span>
                );
              })}
            </span>
            <div className={styles.info}>
              <h1 className={styles.title}>{data.data.name}</h1>
              <p className={styles.description}>{data.data.description}</p>
              <Sources sources={data.data.sources} />
              <APIInfo
                uuid={data.data.uuid}
                href={data.data.href}
                createdAt={data.data.created_at}
                updatedAt={data.data.updated_at}
              />
            </div>
          </div>
        )}
      </Fallback.Root>
    </Layout>
  );
}
