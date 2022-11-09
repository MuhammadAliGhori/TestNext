import Link from 'next/link';
import styles  from '../styles/All.module.css';

export default function Navbar() {
  return (
    <div>
        <ul className={styles.head}>
      <h1 className={styles.words}>
    <Link className={styles.textline} href="/">Home</Link>
      </h1>
      <h1 className={styles.words}> <Link className={styles.textline} href="./about" target='blank'>About-Crud</Link></h1>
      <h1 className={styles.words}> <Link className={styles.textline} href="./product/mobile">Mobile</Link></h1>
    </ul>
    </div>
  )
}
