import Image from 'next/image'
import styles from './page.module.scss'
import Hero from '@/components/Hero/Hero'
import HomeCard from '@/components/HomeCard/HomeCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HomeCard />
    </main>
  )
}
