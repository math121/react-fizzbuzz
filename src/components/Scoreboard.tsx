import { useState, useEffect } from "react";

type saveScore = {
  score: number;
  name: string;
  time: string;
};

export const Scoreboard = () => {
  const [scores, setScores] = useState<saveScore[]>([]);

  const sortScores = (array: saveScore[]) => {
    return array.sort((a, b) => (a.score < b.score ? 1 : -1));
  };

  useEffect(() => {
    let scoresList = [];

    const scores: string | null = localStorage.getItem("scores");
    if (scores) {
      scoresList = JSON.parse(scores);
    }

    const sortedList = sortScores(scoresList);
    setScores(sortedList);
  }, []);

  return (
    <>
      <h1>Scoreboard</h1>
      {scores &&
        scores.map((value, index) => (
          <p key={index}>{`Time: ${value.time} | Score: ${value.score}`}</p>
        ))}

      {scores.length == 0 && <p>No scores to show</p>}
    </>
  );
};
