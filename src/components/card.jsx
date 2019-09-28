import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 10px;
  ${props =>
    props.large &&
    `
      grid-column-start: 1;
      grid-column-end: 3;
    `}
  img {
    width: 100%;
  }
`;

const Title = styled.p`
  position: absolute;
  bottom: 0px;
  left: 5px;
  color: white;
`;

const Card = ({ title, img, large }) => (
  <Container large={large}>
    <Title>{title}</Title>
    <img src={img} />
  </Container>
);

export default Card;
