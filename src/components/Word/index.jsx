import { Letter } from "../Letter";
import { StyledWord } from "./styles";

function Word(props) {
  const { letters } = props;
  const lettersArray = Object.keys(letters);
  return (
    <StyledWord>
      {lettersArray.map((letter) => (
        <Letter key={letter} letter={letter} status={letters[letter]} />
      ))}
    </StyledWord>
  );
}

export { Word };
