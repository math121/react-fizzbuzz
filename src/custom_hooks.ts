import { useEffect, useState } from "react";

type saveScore = {
  score: number;
  name: string;
  time: string;
};

export function useCustomMessage(number: number, text: string) {
  const [message, setMessage] = useState<string | null>(null);
  const [t, setT] = useState<string[]>([]);

  const score: saveScore = {
    score: number,
    name: "",
    time: new Date().toLocaleString(),
  };
  let storage = [];

  storage = JSON.parse(localStorage.getItem("scores")) || [];

  useEffect(() => {
    if ((number % 3) + (number % 5) == 0 && text == "") {
      setMessage(`Number ${number} is FizzBuzz`);
      setT([...t, `${number} = FizzBuzz`]);
      storage.push(score);
    } else if (number % 3 == 0 && text == "") {
      setMessage(`Number ${number} is Fizz`);
      setT([...t, `${number} = Fizz`]);
      storage.push(score);
    } else if (number % 5 == 0 && text == "") {
      setMessage(`Number ${number} is Buzz`);
      setT([...t, `${number} = Buzz`]);
      storage.push(score);
    }

    localStorage.setItem("scores", JSON.stringify(storage));

    console.log("NUmber: " + number + " " + text);

    return () => {
      setMessage(null);
    };
  }, [number, text]);

  //console.log("NUmber: " + number + " " + text);

  return { message: message, missedNumbers: t };
}
