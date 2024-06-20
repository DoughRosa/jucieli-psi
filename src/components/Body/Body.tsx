import BodyStyled from "./BodyStyled";

interface BodyProps {
  children: React.ReactNode;
};

function Body({children}: BodyProps) {
  return (
    <BodyStyled>
      {children}
    </BodyStyled>
  );
};

export default Body;
