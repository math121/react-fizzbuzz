import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

export const Cheatsheet = () => {
  const [numberLoad, setNumberLoad] = useState(15);

  function fetchCheatsheet() {
    return fetch(`https://fizzbuzz.ketzu.net/to/${numberLoad}`)
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
        <label>Generate number up to: </label>
        <input type="text" />
      </form>

      {!isLoading &&
        data.length != 0 &&
        data.map((value: number | string, index: number) => (
          <p key={index}>{`Number: ${index + 1} | Value: ${value}`}</p>
        ))}

      {!isLoading && data.length == 0 && (
        <p>Please give a number greater than 0</p>
      )}

      {isLoading && <p>Page is loading....</p>}
    </>
  );
};
