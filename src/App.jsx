import { Keyboard } from "./components/Keyboard";
import { useState } from "react";
import { StyledApp } from "./styles";
import { Word } from "./components/Word";

function App() {
  const [letters, setLetters] = useState({
    A: "default",
    B: "default",
    C: "default",
    D: "default",
    E: "default",
    F: "default",
    G: "default",
    H: "default",
    I: "default",
    J: "default",
    K: "default",
    L: "default",
    M: "default",
    N: "default",
    O: "default",
    P: "default",
    Q: "default",
    R: "default",
    S: "default",
    T: "default",
    U: "default",
    V: "default",
    W: "default",
    X: "default",
    Y: "default",
    Z: "default",
  });

  const word = "ahorcado";

  const [palabra, setPalabra] = useState(
    word.split("").reduce((acc, letter) => {
      acc[letter.toUpperCase()] = "default";
      return acc;
    }, {})
  );

  /*const [palabra, setPalabra] = useState(
  word.split("").map(letter => ({
    letter: letter.toUpperCase(),
    status: "default"
  }))
);*/

  function handleClick(event) {
    if (word.toUpperCase().includes(event.target.value)) {
      setLetters({ ...letters, [event.target.value]: "success" });
      setPalabra({ ...palabra, [event.target.value]: "success" });
    } else {
      setLetters({ ...letters, [event.target.value]: "error" });
      setPalabra({ ...palabra, [event.target.value]: "error" });
    }
  }

  return (
    <StyledApp>
      <Word letters={palabra} />
      <Keyboard onClick={handleClick} letters={letters} />;
    </StyledApp>
  );
}

export default App;
