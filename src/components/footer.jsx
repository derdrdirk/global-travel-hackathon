import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faBookOpen,
  faPoll
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BottomBar = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #e9e9e9;
  bottom: 0;
  padding: 5px 10px 5px 10px;

  a {
    color: #ff5c5d;
    font-size: 2.5rem;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Footer = () => (
  <BottomBar>
    <Flex>
      <Link to="">
        <FontAwesomeIcon icon={faBookOpen} />
      </Link>
      <Link to="/polls">
        <FontAwesomeIcon icon={faPoll} />
      </Link>
      <Link to="/polls">
        <FontAwesomeIcon icon={faComment} />
      </Link>
    </Flex>
  </BottomBar>
);

export default Footer;
