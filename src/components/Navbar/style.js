import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as tg } from "../../assets/icons/tg.svg";
import { ReactComponent as yt } from "../../assets/icons/yt.svg";
import { ReactComponent as git } from "../../assets/icons/git.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  box-shadow: var(--shadow);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  .active {
    color: #08080b;
    font-weight: 900;
  }
`;

const Link = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 18px;
  width: fit-content;
`;
const User = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 28px;
  max-width: 300px;
  width: 100%;
  padding-left: 25px;
  border-right: var(--border);
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

Contact.User = styled.div`
  font-size: 20px;
`;
Contact.Telegram = styled(tg)`
  cursor: pointer;
`;
Contact.Youtube = styled(yt)`
  cursor: pointer;
`;
Contact.Git = styled(git)`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 25px;
  gap: 20px;
`;

export { Container, Link, Contact, Wrapper, User };
