import { questions } from "./questions";
import styles from "./Questionnaire.module.css";

export default function Results({ answers, onRestart }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.resultsTitle}>Your design profile</h2>
      <dl className={styles.results}>
        {questions.map((question) => {
          const chosen = question.options.find(
            (option) => option.value === answers[question.id]
          );
          return (
            <div key={question.id} className={styles.resultRow}>
              <dt>{question.prompt}</dt>
              <dd>{chosen ? chosen.label : "—"}</dd>
            </div>
          );
        })}
      </dl>
      <button type="button" className={styles.primary} onClick={onRestart}>
        Start over
      </button>
    </div>
  );
}
