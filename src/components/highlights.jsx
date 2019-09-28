import React, { Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Highlights = ({ title, slider, children }) => (
  <Fragment>
    <h3>{title}</h3>
    {slider ? (
      <Slider style={{ marginBottom: 30 }} {...settings}>
        {children}
      </Slider>
    ) : (
      <Grid>{children}</Grid>
    )}
  </Fragment>
);

export default Highlights;
