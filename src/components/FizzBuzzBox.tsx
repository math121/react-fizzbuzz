import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCustomMessage } from "../custom_hooks";

function FizzBuzzBox() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState<string | number>(1);
  const message = useCustomMessage(number, text);

  const fizzCheck = (): void => {
    setText("Fizz");
    setNumber(number + 1);
  };

  const buzzCheck = (): void => {
    setText("Buzz");
    setNumber(number + 1);
  };

  const fizzBuzzCheck = (): void => {
    setText("FizzBuzz");
    setNumber(number + 1);
  };

  const incrementNumber = (): void => {
    setText(number + 1);
    setNumber(number + 1);
  };

  const reset = (): void => {
    setNumber(1);
    setText(1);
  };

  return (
    <>
      <div className="container">
        <Box className="button-box">
          <Button
            style={{ fontSize: 17 }}
            disabled={message != null}
            variant="outlined"
            onClick={incrementNumber}
          >
            Increase number
          </Button>
          <Button
            style={{ fontSize: 17 }}
            disabled={message != null}
            variant="outlined"
            onClick={fizzCheck}
          >
            Fizz
          </Button>
          <Button
            style={{ fontSize: 17 }}
            disabled={message != null}
            variant="outlined"
            onClick={buzzCheck}
          >
            Buzz
          </Button>
          <Button
            style={{ fontSize: 17 }}
            disabled={message != null}
            variant="outlined"
            onClick={fizzBuzzCheck}
          >
            FizzBuzz
          </Button>
        </Box>

        <TextField disabled value={text != "" ? text : number}></TextField>
        <Button style={{ fontSize: 17 }} variant="contained" onClick={reset}>
          Reset
        </Button>
      </div>
      {message && <h2>{message}</h2>}
    </>
  );
}

export { FizzBuzzBox };
