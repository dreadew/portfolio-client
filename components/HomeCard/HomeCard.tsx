import Link from "next/link";
import Image from "next/image";
import img from '../../assets/images/2.jpg';
import styles from './HomeCard.module.scss';

export default function HomeCard() {
	return (
		<>
			<div className={styles.card}>
				<div className={styles["card-text"]}>
					<div class={styles["card-text__container"]}>
						<h1 className={styles["card-text__container-title"]}>WE WORK WITH DIGITAL EXPERIENCES</h1>
						<p className={styles["card-text__container-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<Link className={styles["card-text__button"]} href="/store">See products</Link>
				</div>
				<div className={styles["card-image"]}>
					<Image className={styles["card-image__img"]} src={img} alt="" width={1400} height={788} />
				</div>
			</div>
		</>
	)
}