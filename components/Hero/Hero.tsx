import HeroGrid from "./HeroGrid/HeroGrid";
import HeroText from "./HeroText/HeroText";
import styles from './Hero.module.scss';

export default function Hero() {
	return (
		<main className={styles.wrapper}>
			<div className={styles['wrapper-content']}>
				<HeroText />
				<HeroGrid />
			</div>
		</main>
	)
}