import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCustomMessage } from "./custom_hooks";

function FizzBuzzBox() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  const message: string | null = useCustomMessage(number, text);

  const fizzCheck = (): void => {
    setText("Fizz");
    setNumber(number + 1);
  };

  const buzzCheck = (): void => {
    setText("Buzz");
    setNumber(number + 1);
  };

  const incrementNumber = (): void => {
    setText("");
    setNumber(number + 1);
  };

  const reset = (): void => {
    setNumber(1);
    setText("");
  };

  return (
    <>
      <div className="container">
        <Box className="button-box">
          <Button variant="outlined" onClick={incrementNumber}>
            Increase number
          </Button>
          <Button variant="outlined" onClick={fizzCheck}>
            Fizz
          </Button>
          <Button variant="outlined" onClick={buzzCheck}>
            Buzz
          </Button>
        </Box>

        <TextField disabled value={text != "" ? text : number}></TextField>

        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </div>
      {message && <h2>{message}</h2>}

      <Button>This is custom hooks</Button>
    </>
  );
}

export { FizzBuzzBox };
