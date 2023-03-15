import React from "react";
import { Outlet } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Body, Container, Link, Wrapper } from "./style";

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        {sidebar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
