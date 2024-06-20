import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNumberLoad(e.target[0].value);
  };

  return (
    <>
      <h1>Cheatsheet</h1>

      <form onSubmit={(e) => submit(e)}>
        <input type="text" />
      </form>

      {!isLoading &&
        data.map((value: number | string, index: number) => (
          <p key={index}>{`Number: ${index + 1} | Value: ${value}`}</p>
        ))}

      {isLoading && <p>Page is loading....</p>}
    </>
  );
};
