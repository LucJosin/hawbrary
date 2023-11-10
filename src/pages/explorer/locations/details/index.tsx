import { Description } from '@/components/core/Description';
import Loading from '@/components/core/Loading';
import Title from '@/components/core/Title/Title';
import { APIInfo } from '@/components/templates/APIInfo';
import ErrorModal from '@/components/templates/ErrorModal';
import { Sources } from '@/components/templates/Sources';
import Layout from '@/layout/Layout';
import { getSingleLocation } from '@/services/hawapi';
import styles from '@/styles/LocationDetailsPage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

export default function LocationDetailsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <LocationDetails />
      </div>
    </Layout>
  );
}

function LocationDetails() {
  const [isImageSelected, setImageSelected] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(uuid, getSingleLocation);

  if (error) return <ErrorModal />;
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
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
        <Title value={data.data.name} />
        <Description value={data.data.description} />
        <Sources sources={data.data.sources} />
        <APIInfo
          uuid={data.data.uuid}
          href={data.data.href}
          createdAt={data.data.created_at}
          updatedAt={data.data.updated_at}
        />
      </div>
    </>
  );
}
