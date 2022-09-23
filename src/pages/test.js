import styles from "../styles/Test.module.css";

export default function Test() {
  return (
    <section className={styles.background}>
      <div className={styles.card}>
        <h1>Hello</h1>
        <form>
          <div className={styles.inputForm}>
            <lable>username : </lable>
            <input placeholder='username...' />
          </div>
          <div className={styles.inputForm}>
            <lable>username : </lable>
            <input placeholder='username...' />
          </div>
          <div className={styles.inputForm}>
            <lable>username : </lable>
            <input placeholder='username...' />
          </div>
        </form>
      </div>
    </section>
  );
}
