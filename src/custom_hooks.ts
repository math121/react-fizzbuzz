import { useEffect, useState } from "react";

type score = {
  score: number;
  userName: string;
  time: string;
};

function postScore(data: score) {
  return fetch(`http://localhost:8080/api/scoreboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
}

export function useCustomMessage(number: number, text: string | number) {
  const [message, setMessage] = useState<string | null>(null);

  const checkFizzBuzz = (number: number): string | number => {
    if ((number % 3) + (number % 5) == 0) return "FizzBuzz";
    if (number % 3 == 0) return "Fizz";
    if (number % 5 == 0) return "Buzz";
    return number;
  };

  useEffect(() => {
    const answer = checkFizzBuzz(number);

    const data = {
      userName: "Guest",
      time: new Date().toISOString().slice(0, 19),
      score: number - 1,
    };

    if (answer != text) {
      setMessage(`Number ${number} is ${answer}!`);
      postScore(data);
    }

    console.log("NUmber: " + number + " " + text);

    return () => {
      setMessage(null);
    };
  }, [number, text]);

  return message;
}
