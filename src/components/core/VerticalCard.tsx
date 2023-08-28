import styles from '@/styles/VerticalCard.module.css';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
  priButton?: string;
  priButtonHref?: string;
  secButton?: string;
  secButtonHref?: string;
}

export default function VerticalCard(props: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={props.thumbnail}
        height={0}
        width={0}
        alt={props.title}
        className={styles.image}
      />
      <div className={styles.more}>
        <div className={styles.info}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
        <div className={styles.routers}>
          {props.priButton && props.priButtonHref && (
            <PrimaryButton href={props.priButtonHref} name={props.priButton} />
          )}
          {props.secButton && props.secButtonHref && (
            <SecondaryButton
              href={props.secButtonHref}
              name={props.secButton}
            />
          )}
        </div>
      </div>
    </div>
  );
}
