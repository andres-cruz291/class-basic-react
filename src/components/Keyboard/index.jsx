import { Key } from "../Key";
import { StyledKeyboard } from "./styles";

function Keyboard(props) {
  const { onClick, letters } = props;
  const alphabet = Object.keys(letters);
  return (
    <StyledKeyboard>
      {alphabet.map((letter) => (
        <Key
          key={letter}
          letter={letter}
          status={letters[letter]}
          onClick={onClick}
        />
      ))}
    </StyledKeyboard>
  );
}

export { Keyboard };
