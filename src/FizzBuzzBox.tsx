import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

function FizzBuzzBox() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fizzCheck = (): void => {
    setText("Fizz");

    setNumber((oldNum) => {
      const t = oldNum + 1;
      console.log(t);

      if (t % 3 != 0) {
        setError("You lose! ");
      }

      return t;
    });
  };

  const buzzCheck = (): void => {
    setText("Buzz");

    setNumber((oldNum) => {
      const t = oldNum + 1;
      console.log(t);

      if (t % 5 != 0) {
        setError("You lose! ");
      }

      return t;
    });
  };

  const incrementNumber = (): void => {
    setText("");
    setNumber((oldNum) => {
      const t = oldNum + 1;

      console.log(t);
      if ((t % 3 == 0 || t % 5 == 0) && text == "") {
        setError("You lose!");
      }

      return t;
    });
  };

  const reset = (): void => {
    setNumber(1);
    setText("");
    setError(null);
  };

  return (
    <>
      <Box>
        <Button onClick={incrementNumber}>Increase number</Button>
        <Button onClick={fizzCheck}>Fizz</Button>
        <Button onClick={buzzCheck}>Buzz</Button>
        <TextField disabled value={text != "" ? text : number}></TextField>
        <Button onClick={reset}>Reset</Button>
      </Box>
      {error && <h2>{error}</h2>}
    </>
  );
}

export { FizzBuzzBox };
