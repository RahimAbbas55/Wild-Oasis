import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 26rem auto;
    height: 100vh;
`;

const MAIN = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
function AppLayout() {
  return (
    <>
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <MAIN>
        <Container>
          <Outlet />
        </Container>
      </MAIN>
    </StyledAppLayout>
    </>
  );
}

export default AppLayout;
