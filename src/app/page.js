import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <label for="user_input">User input:</label>
        <input id="#user_input" type="text" placeholder="User input" />
      </div>
    </main>
  );
}
