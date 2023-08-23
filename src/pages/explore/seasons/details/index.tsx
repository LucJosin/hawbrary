import PrimaryButton from '@/components/core/PrimaryButton';
import SecondaryButton from '@/components/core/SecondaryButton';
import DetailsPage from '@/layout/DetailsPage';
import styles from '@/styles/SeasonDetailsPage.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';

export default function SeasonDetailsPage() {
  return (
    <DetailsPage>
      <div className={styles.content}>
        <div className={styles.container}>
          <Image
            src="https://s6.imgcdn.dev/xdKqL.jpg"
            alt=""
            className={styles.image}
            height={0}
            width={0}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Stranger Things 2</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            voluptas aperiam dolore nihil omnis, at accusamus sed quidem sint
            vitae ullam blanditiis vero, rerum repellat labore amet voluptatum
            velit ducimus?
          </p>
          <span className={styles.genres}>
            <span className={styles.genre}>Finn</span>
            <span className={styles.genre}>Wolfhard</span>
            <span className={styles.genre}>Wolf</span>
          </span>
          <span className={styles.information}>
            <Icon icon="system-uicons:episodes" width="18" />1
          </span>
          <span className={styles.information}>
            <Icon icon="ic:baseline-access-time" width="18" />
            58m
          </span>
          <span className={styles.information}>
            <Icon icon="ic:baseline-attach-money" width="18" />
            15m
          </span>
          <div className={styles.episodes}>
            <h3>Episodes: </h3>
            <span className={styles.eps}>
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
              <SecondaryButton href="" name="Episode 1" />
            </span>
          </div>
          <div className={styles.seasons}>
            <h3>Seasons: </h3>
            <span className={styles.seas}>
              <PrimaryButton href="" name="Prev season" />
              <PrimaryButton href="" name="Next season" />
            </span>
          </div>
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
