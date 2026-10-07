import Questionnaire from "../components/Questionnaire";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Design Questionnaire</h1>
      <p className={styles.subtitle}>
        Answer a few questions so we can understand your design preferences.
      </p>
      <Questionnaire />
    </main>
  );
}
