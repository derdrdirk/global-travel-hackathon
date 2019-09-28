import React from "react";
import Slider from "react-slick";
import sagradaFamilia from "../images/sagradaFamilia.png";
import styled from "styled-components";
import Polls from "./polls.jsx";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const ImageBox = styled.div`
  img {
    width: 95%;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;
const H4 = styled.h4`
  font-size: 1.2rem;
  margin-top: 6px;
  font-weight: 300;
`;

const H5 = styled.h5`
  font-size: 1.1rem;
  color: gray;
  font-weight: 300;
  margin: 0;
`;

const WikiBox = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  border-bottom: 1px solid #efefef;

  a {
    color: #ff5c5d;
  }
`;

const WikiText = styled.p`
  font-size: 1.3rem;
`;

const Button = styled.button`
  border: none;
  background-color: #ff5c5d;
  border-radius: 25px;
  font-size: 1.3rem;
  padding: 15px 20px;
  color: white;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.2rem;
  }
`;

const Experience = () => (
  <div>
    <H2>Camp Nou</H2>
    <H4>Stadium & Arenas</H4>

    <WikiBox>
      <H5>Wikipedia</H5> <a>Open Wikipedia</a>
    </WikiBox>
    <WikiText>
      With a seating capacity of 99,354 it is the largest stadium in Spain and
      Europe, and the third largest footbal stadium in...
    </WikiText>

    <Slider style={{ marginBottom: 30 }} {...settings}>
      <ImageBox>
        <img src={sagradaFamilia} />
      </ImageBox>
      <ImageBox>
        <img src={sagradaFamilia} />
      </ImageBox>
      <ImageBox>
        <img src={sagradaFamilia} />
      </ImageBox>
      <ImageBox>
        <img src={sagradaFamilia} />
      </ImageBox>
      <ImageBox>
        <img src={sagradaFamilia} />
      </ImageBox>
    </Slider>

    <H5>Address</H5>
    <Flex>
      <div>
        <p>
          Carrer d'Arístides Maillol, 12 <br />
          08028 Barcelona <br />
          España
        </p>
      </div>
      <Button>Maps</Button>
    </Flex>

    <Polls />
  </div>
);

export default Experience;
