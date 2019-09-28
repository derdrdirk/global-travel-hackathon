import React, { Fragment } from "react";
import Highlights from "./highlights.jsx";
import Card from "./card.jsx";
import styled from "styled-components";
import sagradaFamilia from "../images/sagradaFamilia.png";
import campNou from "../images/campNou.png";
import parcGuell from "../images/parcGuell.png";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-size: 2.5rem;
`;

const Home = () => (
  <Fragment>
    <Title>Hi Laura!</Title>
    <p>Get ready for your next adventure in Barcelona</p>
    <Highlights title="Highlights for you">
      <Link to="/experience">
        <Card title="Sagrada Familia" img={sagradaFamilia} />
      </Link>
      <Card title="Camp Nou" img={campNou} />
      <Card title="Parc Güell" large img={parcGuell} />
    </Highlights>

    <Highlights title="Art" slider>
      <Card title="Sagrada Familia" img={sagradaFamilia} />
      <Card title="Sagrada Familia" img={sagradaFamilia} />
      <Card title="Camp Nou" img={campNou} />
      <Card title="Camp Nou" img={campNou} />
    </Highlights>
  </Fragment>
);

export default Home;
