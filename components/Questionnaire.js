"use client";

import { useMemo, useState } from "react";
import { questions } from "./questions";
import Question from "./Question";
import Results from "./Results";
import styles from "./Questionnaire.module.css";

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[step];
  const isLast = step === questions.length - 1;
  const answered = answers[current?.id] !== undefined;
  const progress = useMemo(
    () => Math.round((Object.keys(answers).length / questions.length) * 100),
    [answers]
  );

  function select(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  function next() {
    if (!answered) return;
    if (isLast) {
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
  }

  if (submitted) {
    return <Results answers={answers} onRestart={restart} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <p className={styles.counter}>
        Question {step + 1} of {questions.length}
      </p>

      <Question
        question={current}
        selected={answers[current.id]}
        onSelect={select}
      />

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.secondary}
          onClick={back}
          disabled={step === 0}
        >
          Back
        </button>
        <button
          type="button"
          className={styles.primary}
          onClick={next}
          disabled={!answered}
        >
          {isLast ? "See results" : "Next"}
        </button>
      </div>
    </div>
  );
}
