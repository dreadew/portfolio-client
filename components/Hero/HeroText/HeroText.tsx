import styles from './HeroText.module.scss';

export default function HeroText() {
	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles['wrapper-title']}>WE WORK WITH DIGITAL</h1>
				<p className={styles['wrapper-description']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</>
	)
}