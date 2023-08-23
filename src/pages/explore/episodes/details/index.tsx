import PrimaryButton from '@/components/core/PrimaryButton';
import DetailsPage from '@/layout/DetailsPage';
import styles from '@/styles/EpisodeDetailsPage.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';

export default function EpisodeDetailsPage() {
  return (
    <DetailsPage isLoading={false} hasData={false}>
      <div className={styles.content}>
        <div className={styles.container}>
          <Image
            src="https://s6.imgcdn.dev/xWoWe.jpg"
            alt=""
            className={styles.image}
            height={0}
            width={0}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>The Weirdo on Maple Street</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            suscipit officiis molestiae rem consectetur odio molestias,
            voluptates illum et nobis illo cumque, doloribus fuga perspiciatis.
            Voluptate harum quia vero quibusdam!
          </p>
          <span className={styles.information}>
            <Icon icon="ic:baseline-place" width="18" />
            American
          </span>
          <span className={styles.information}>
            <Icon icon="mdi:birthday-cake-outline" width="18" />
            0000-00-00
          </span>
          <div className={styles.episodes}>
            <h3>Episodes: </h3>
            <span className={styles.eps}>
              <PrimaryButton href="" name="Prev episode" />
              <PrimaryButton href="" name="Next episode" />
            </span>
          </div>
          <div className={styles.season}>
            <h3>Season:</h3>
            <span className={styles.seas}>
              <PrimaryButton href="" name="See season" />
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
