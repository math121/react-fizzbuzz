import { useEffect, useState } from "react";

type saveScore = {
  score: number;
  name: string;
  time: string;
};

export function useCustomMessage(number: number, text: string | number) {
  const [message, setMessage] = useState<string | null>(null);

  const checkFizzBuzz = (number: number): string | number => {
    if ((number % 3) + (number % 5) == 0) return "FizzBuzz";
    if (number % 3 == 0) return "Fizz";
    if (number % 5 == 0) return "Buzz";
    return number;
  };

  useEffect(() => {
    const score: saveScore = {
      score: number,
      name: "",
      time: new Date().toLocaleString(),
    };
    let storage = [];

    const scores: string | null = localStorage.getItem("scores");
    if (scores) {
      storage = JSON.parse(scores);
    }

    const answer = checkFizzBuzz(number);

    if (answer != text) {
      setMessage(`Number ${number} is ${answer}`);
      storage.push(score);
    }

    localStorage.setItem("scores", JSON.stringify(storage));

    console.log("NUmber: " + number + " " + text);

    return () => {
      setMessage(null);
    };
  }, [number, text]);

  return message;
}
