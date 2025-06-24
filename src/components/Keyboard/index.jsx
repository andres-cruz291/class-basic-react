import { Key } from "../Key";
import { StyledKeyboard } from "./styles";

function Keyboard(props) {
  const { onClick, palabra } = props;
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <StyledKeyboard>
      {letters.map((letter) => (
        <Key
          key={letter}
          letter={letter}
          status={palabra[letter] ? palabra[letter].status : "default"}
          onClick={onClick}
        />
      ))}
    </StyledKeyboard>
  );
}

export { Keyboard };
