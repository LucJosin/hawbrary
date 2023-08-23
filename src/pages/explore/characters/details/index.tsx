import PrimaryButton from '@/components/core/PrimaryButton';
import DetailsPage from '@/layout/DetailsPage';
import styles from '@/styles/CharacterDetailsPage.module.css';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import Image from 'next/image';

export default function CharacterDetailsPage() {
  return (
    <DetailsPage hasData={true}>
      <div className={styles.content}>
        <div className={styles.images}>
          <Image
            src="https://s6.imgcdn.dev/xmI5e.png"
            alt=""
            className={styles.avatar}
            height={0}
            width={0}
          />
          <span className={styles.list}>
            <Image
              src="https://media.cnn.com/api/v1/images/stellar/prod/230605141033-01-finn-wolfhard-file.jpg"
              alt=""
              className={styles.image}
              height={0}
              width={0}
            />{' '}
            <Image
              src="https://assets.teenvogue.com/photos/5e5e76939c18f10008d38c44/1:1/w_1600%2Cc_limit/tout.jpg"
              alt=""
              className={styles.image}
              height={0}
              width={0}
            />
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Finn Wolfhard</h1>
          <span className={styles.nicknames}>
            <span className={styles.nick}>Finn</span>
            <span className={styles.nick}>Wolfhard</span>
            <span className={styles.nick}>Wolf</span>
          </span>
          <span className={styles.information}>
            <Icon icon="mdi:birthday-cake-outline" width="18" />
            0000-00-00
          </span>
          <span className={styles.information}>
            <Icon icon="mdi:coffin" width="18" />
            0000-00-00
          </span>
          <span className={styles.information}>
            <Icon icon="icons8:gender" width="18" />
            Male
          </span>
          <div className={styles.socials}>
            <span className={styles.social}>
              <Icon icon="simple-icons:instagram" width="18" />
              Instagram
            </span>
            <span className={styles.social}>
              <Icon icon="simple-icons:facebook" width="18" />
              Facebook
            </span>
            <span className={styles.social}>
              <Icon icon="simple-icons:twitter" width="18" />
              Twitter
            </span>
          </div>
          <div className={styles.actor}>
            <h2>Actor:</h2>
            <PrimaryButton href="" name="See actor" />
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
