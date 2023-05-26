import Image from 'next/image';
import img1 from '../../../assets/images/1.png';
import img3 from '../../../assets/images/3.jpg';
import img4 from '../../../assets/images/4.jpg';
import styles from './HeroGrid.module.scss';

export default function HeroGrid() {
	return (
		<>
			<div className={styles.wrapper}>
				<Image className={`${styles['wrapper-el1']} ${styles['wrapper-el']}`} src={img1} alt="" width={1400} height={788} />
				<Image className={`${styles['wrapper-el2']} ${styles['wrapper-el']}`} src={img3} alt="" width={1400} height={788} />
				<Image className={`${styles['wrapper-el3']} ${styles['wrapper-el']}`} src={img4} alt="" width={1400} height={788} />
				<button className={`${styles['wrapper-el4']} ${styles['wrapper-el']}`}>Contact us</button>
			</div>
		</>
	)
}