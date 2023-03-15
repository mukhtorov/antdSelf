import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Container } from "./style";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Outlet />
      <h1>Generic {location.pathname} coming soon</h1>
    </Container>
  );
};

export default Generic;
