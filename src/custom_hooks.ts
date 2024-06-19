import { useEffect, useState } from "react";

export function useCustomMessage(number: number, text: string): string | null {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (number % 3 == 0 && text != "Fizz") {
      setMessage(`You lose! Number ${number} is Fizz`);
    } else if (number % 5 == 0 && text != "Buzz") {
      setMessage(`You lose! Number ${number} is Buzz`);
    }

    console.log("NUmber: " + number + " " + text);

    return () => {
      setMessage(null);
    };
  }, [number, text]);

  //console.log("NUmber: " + number + " " + text);

  return message;
}
