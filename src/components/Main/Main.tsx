import MainStyled from "./MainStyled";

interface MainProps {
  children: React.ReactNode;
};

function Main({children}: MainProps) {
  return (
    <MainStyled>
      {children}
    </MainStyled>
  );
};

export default Main;
