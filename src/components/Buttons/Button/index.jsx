import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";

export const Generic = ({ children, type }) => {
  const location = useLocation();
  return <Container type={type}>{children}</Container>;
};

export default Generic;
