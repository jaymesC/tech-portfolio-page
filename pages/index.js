
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Exp<span className={styles.underline}>erie</span>nce
      </h1>
      <div className={styles.content}>
        <div className={styles.names}>
          <h2>TOMMY</h2>
        </div>
        <div className={styles.position}>
          <h4>Full stack web developer</h4>
          <p>helo</p>
        </div>
      </div>
    </div>
  );
}
