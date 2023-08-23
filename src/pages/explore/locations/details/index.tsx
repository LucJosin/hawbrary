import DetailsPage from '@/layout/DetailsPage';
import styles from '@/styles/LocationDetailsPage.module.css';
import Image from 'next/image';

export default function LocationDetailsPage() {
  return (
    <DetailsPage>
      <div className={styles.content}>
        <div className={styles.container}>
          <Image
            src="https://s6.imgcdn.dev/xbGnN.jpg"
            alt=""
            className={styles.image}
            height={0}
            width={0}
          />
          <span className={styles.list}>
            <Image
              src="https://s6.imgcdn.dev/xbGnN.jpg"
              alt=""
              className={styles.mini}
              height={0}
              width={0}
            />
            <Image
              src="https://s6.imgcdn.dev/xbGnN.jpg"
              alt=""
              className={styles.mini}
              height={0}
              width={0}
            />
            <Image
              src="https://s6.imgcdn.dev/xbGnN.jpg"
              alt=""
              className={styles.mini}
              height={0}
              width={0}
            />
            <Image
              src="https://s6.imgcdn.dev/xbGnN.jpg"
              alt=""
              className={styles.mini}
              height={0}
              width={0}
            />
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Stranger Things 2</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            voluptas aperiam dolore nihil omnis, at accusamus sed quidem sint
            vitae ullam blanditiis vero, rerum repellat labore amet voluptatum
            velit ducimus?
          </p>
          <div className={styles.sources}>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
            <span>example.com</span>
          </div>
        </div>
      </div>
    </DetailsPage>
  );
}
