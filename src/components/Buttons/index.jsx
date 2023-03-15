import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";
import Button from "./Button";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Button type="loading">Submit</Button>
      <Button type="primary">Submit</Button>
      <Button type="dashshed">Submit</Button>
    </Container>
  );
};

export default Generic;
