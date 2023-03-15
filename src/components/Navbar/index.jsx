import React from "react";

import { navbar } from "../../utils/navbar";
import { Contact, Container, Link, User, Wrapper } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <User path="/components">Antd Library</User>
      <Wrapper>
        {navbar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
        <Contact>
          <Contact.User>Webbrain Academy</Contact.User>
          <a href="https://t.me/webbrain_academy">
            <Contact.Telegram />
          </a>
          <a href="https://youtube.com/c/webbrainacademy">
            <Contact.Youtube />
          </a>
          <a href="https://github.com/webbrain">
            <Contact.Git />
          </a>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
