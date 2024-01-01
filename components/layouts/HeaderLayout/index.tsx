import Topbar from "../../blocks/Topbar";
import * as Styled from "./HeaderLayout.styled";

export default function HeaderLayout() {
  return (
    <Styled.HeaderLayoutContainer
      sx={{
        borderBottom: 1,
        borderBottomColor: "borderColor.main",
      }}
    >
      <Topbar />
    </Styled.HeaderLayoutContainer>
  );
}
