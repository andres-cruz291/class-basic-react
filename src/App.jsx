import { Keyboard } from "./components/Keyboard";
import { useState, useEffect } from "react";
import { StyledApp } from "./styles";
import { Word } from "./components/Word";

//function getRandomWord() {}

function initialState() {
  const word = "ahorcado";
  const arr = word.split("");
  const initialObject = {};
  arr.forEach(
    (letter) =>
      (initialObject[letter.toUpperCase()] = {
        status: "default",
        valid: true,
      })
  );

  return initialObject;
}

function App() {
  const [palabra, setPalabra] = useState(initialState());

  // const [palabra, setPalabra] = useState(
  //   word.split("").reduce((acc, letter) => {
  //     acc[letter.toUpperCase()] = "default";
  //     return acc;
  //   }, {})
  // );

  /*const [palabra, setPalabra] = useState(
  word.split("").map(letter => ({
    letter: letter.toUpperCase(),
    status: "default"
  }))
);*/

  function handleClick(event) {
    if (palabra[event.target.value]) {
      //if (palabra.toUpperCase().includes(event.target.value)) {
      //setLetters({ ...letters, [event.target.value]: "success" });
      if (palabra[event.target.value].status === "default") {
        setPalabra({ ...palabra, [event.target.value]: { status: "success" } });
      }
    } else {
      //setLetters({ ...letters, [event.target.value]: "error" });
      setPalabra({
        ...palabra,
        [event.target.value]: { status: "error", valid: false },
      });
    }
  }

  return (
    <StyledApp>
      <Word letters={palabra} />
      <Keyboard onClick={handleClick} palabra={palabra} />;
    </StyledApp>
  );
}

export default App;
