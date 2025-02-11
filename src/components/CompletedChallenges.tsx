"use client";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
