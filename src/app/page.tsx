import { cookies } from "next/headers";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import React from "react";

export default async function Home() {
  const cookieStore = await cookies();
  const level = Number(cookieStore.get("level")?.value) || 1;
  const currentExperience =
    Number(cookieStore.get("currentExperience")?.value) || 0;
  const challengesCompleted =
    Number(cookieStore.get("challengesCompleted")?.value) || 0;
  
  const pomodoroDefaultTime: number = Number(process.env.POMODORO_DEFAULT_TIME);

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <CountdownProvider pomodoroTime={pomodoroDefaultTime}>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </section>
      </div>
    </ChallengesProvider>
  );
}
