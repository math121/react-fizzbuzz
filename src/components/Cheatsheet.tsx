import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
} from "@mui/material";

export const Cheatsheet = () => {
  const [numberLoad, setNumberLoad] = useState(5);

  function fetchCheatsheet() {
    return fetch(`http://localhost:8080/api/fizzbuzz/${numberLoad}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["fizzbuzz", numberLoad],
    queryFn: fetchCheatsheet,
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    if (inputValue > 0) {
      setNumberLoad(inputValue);
    } else {
      setNumberLoad(0);
    }
  };

  return (
    <>
      <h1>Cheatsheet</h1>

      <form onSubmit={(e) => submit(e)}>
        <label className="data-list">Generate number up to: </label>
        <input type="text" />
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 17 }}>Number</TableCell>
            <TableCell sx={{ fontSize: 17 }}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            data.length != 0 &&
            data.map((value: { number: number; value: string }) => (
              <TableRow key={value.number}>
                <TableCell sx={{ fontSize: 17 }}>{value.number}</TableCell>
                <TableCell sx={{ fontSize: 17 }}>{value.value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {!isLoading && data.length == 0 && (
        <p className="data-list">Please give a number greater than 0</p>
      )}

      {isLoading && <p className="data-list">Page is loading....</p>}
    </>
  );
};
