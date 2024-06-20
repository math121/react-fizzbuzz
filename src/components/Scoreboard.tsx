import { useState, useEffect } from "react";
import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
} from "@mui/material";

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 17 }}>Time</TableCell>
            <TableCell sx={{ fontSize: 17 }}>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores &&
            scores.map((value, index) => (
              <TableRow className="data-list" key={index}>
                <TableCell sx={{ fontSize: 17 }}>{value.time}</TableCell>
                <TableCell sx={{ fontSize: 17 }}>{value.score}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {scores.length == 0 && <p className="data-list">No scores to show</p>}
    </>
  );
};
