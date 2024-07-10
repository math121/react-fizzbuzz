import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCustomMessage } from "../custom_hooks";
import { useUser } from "@clerk/clerk-react";

function FizzBuzzBox() {
  const { isSignedIn, user } = useUser();

  const [number, setNumber] = useState(1);
  const [name, setName] = useState(user?.username);
  const [text, setText] = useState<string | number>(1);
  const message = useCustomMessage(number, text, name);

  const [currentScore, setCurrentScore] = useState(0);

  function fetchScore(val) {
    return fetch(`http://localhost:8080/api/scoreboard/${val}`)
      .then((response) => response.json())
      .then((data) => setCurrentScore(data.score));
  }

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

  const submitName = (e): void => {
    e.preventDefault();
    setName(e.target[0].value);

    setName((oldNUm) => {
      console.log(e.target[0].value);
      fetchScore(e.target[0].value);
      return e.target[0].value;
    });
  };

  return (
    <>
      {!isSignedIn ? (
        <form onSubmit={submitName}>
          <label>Enter Name:</label>
          <input type="text" />
          <p>{name}</p>
        </form>
      ) : (
        <p>Welcome! {user.username}</p>
      )}
      {currentScore != 0 && (
        <p>You current high score it up to number: {currentScore}</p>
      )}
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
