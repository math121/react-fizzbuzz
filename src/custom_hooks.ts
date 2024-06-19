import { useEffect, useState } from "react";

export function useCustomMessage(number: number, text: string) {
  const [message, setMessage] = useState<string | null>(null);
  const [t, setT] = useState<string[]>([]);

  useEffect(() => {
    if ((number % 3) + (number % 5) == 0 && text == "") {
      setMessage(`Number ${number} is FizzBuzz`);
      setT([...t, `${number} = FizzBuzz`]);
    } else if (number % 3 == 0 && text == "") {
      setMessage(`Number ${number} is Fizz`);
      setT([...t, `${number} = Fizz`]);
    } else if (number % 5 == 0 && text == "") {
      setMessage(`Number ${number} is Buzz`);
      setT([...t, `${number} = Buzz`]);
    }

    console.log("NUmber: " + number + " " + text);

    return () => {
      setMessage(null);
    };
  }, [number, text]);

  //console.log("NUmber: " + number + " " + text);

  return { message: message, missedNumbers: t };
}
