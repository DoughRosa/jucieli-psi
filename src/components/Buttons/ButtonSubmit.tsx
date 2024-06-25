import ButtonDefaultStyled from "./ButtonDefaultStyle";

interface ButtonSubmitProps {
  label: string;
  action: () => void;
}

function ButtonSubmit({ action, label }: ButtonSubmitProps) {
  return <ButtonDefaultStyled onClick={action}>{label}</ButtonDefaultStyled>;
}

export default ButtonSubmit;