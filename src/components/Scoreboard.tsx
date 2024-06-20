import { useState, useEffect } from "react";

type saveScore = {
  score: number;
  name: string;
  time: string;
};

export const Scoreboard = () => {
  const [scores, setScores] = useState<saveScore[]>([]);

  useEffect(() => {
    const test = JSON.parse(localStorage.getItem("scores")) || [];
    console.log(test);
    setScores(test);
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
