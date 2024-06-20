import { useState, useEffect } from "react";

type saveScore = {
  score: number;
  name: string;
  time: string;
};

export const Scoreboard = () => {
  const [scores, setScores] = useState<saveScore[]>([]);

  useEffect(() => {
    let scoresList = [];

    const scores: string | null = localStorage.getItem("scores");
    if (scores) {
      scoresList = JSON.parse(scores);
    }

    setScores(scoresList);
  }, []);

  return (
    <>
      <h1>Scoreboard</h1>
      {scores &&
        scores.map((value, index) => (
          <p
            key={index}
          >{`Time: ${value.time} | Highest number reached: ${value.score}`}</p>
        ))}

      {scores.length == 0 && <p>No scores to show</p>}
    </>
  );
};
