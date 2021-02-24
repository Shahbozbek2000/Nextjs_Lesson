import Head from "next/head";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <Head>
    <title>Net ninjas lessons</title>
    </Head>
      <h2 className={styles.title}>HomePage</h2>
      <p className={styles.text}>lorem ipsum dolor sit amet</p>
      <p className={styles.text}>lorem ipsum dolor sit amet</p>
      <p className={styles.description}>
      lorem ipsum dolor sit amet
      </p>

      <Link href="/ninjas">
      <a className={styles.btn}>
      See Ninja Listing</a></Link>
    
    </div>
  );
}
