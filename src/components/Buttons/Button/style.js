import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "loading":
      return { bg: "black", border: "1px solid blue" };
    case "dashshed":
      return { bg: "black", border: "1px dashshed blue" };
    default: {
    }
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${() => getType().bg};
  border: ${() => getType().border};
`;

export { Container };
