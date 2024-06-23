import ButtonDefaultStyled from "./ButtonDefaultStyle";

interface ButtonDefaultProps {
  label: string;
}

function ButtonDefault({ label }: ButtonDefaultProps) {
  return <ButtonDefaultStyled>{label}</ButtonDefaultStyled>;
}

export default ButtonDefault;
