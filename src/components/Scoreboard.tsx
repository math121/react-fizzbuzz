import { useQuery } from "@tanstack/react-query";
import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
} from "@mui/material";

type user = {
  country: string;
  userId: number;
  userName: string;
};

type scoreboard = {
  id: number;
  score: number;
  fizzBuzzUser: user;
  time: string;
};

export const Scoreboard = () => {
  function fetchScoreboard() {
    return fetch(`http://localhost:8080/api/scoreboard`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  const { data, isLoading } = useQuery({
    queryKey: ["scoreboard"],
    queryFn: fetchScoreboard,
  });

  return (
    <>
      <h1>Scoreboard</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 17 }}>Time</TableCell>
            <TableCell sx={{ fontSize: 17 }}>Name</TableCell>
            <TableCell sx={{ fontSize: 17 }}>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            data.length != 0 &&
            data.map((value: scoreboard) => (
              <TableRow className="data-list" key={value.id}>
                <TableCell sx={{ fontSize: 17 }}>{value.time}</TableCell>
                <TableCell sx={{ fontSize: 17 }}>
                  {value.fizzBuzzUser.userName}
                </TableCell>
                <TableCell sx={{ fontSize: 17 }}>{value.score}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {data && data.length == 0 && (
        <p className="data-list">No scores to show</p>
      )}
    </>
  );
};
