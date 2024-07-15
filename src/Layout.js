import { Container } from "@mui/material";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Outlet />
    </Container>
  );
};

export default Layout;
