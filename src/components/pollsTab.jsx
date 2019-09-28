import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Flex = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div`
  border: solid gray;
  border-radius: 20px;
  height: 20px;
  width: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  ${props =>
    props.active &&
    `
    background-color: #ff5c5d;
  `}
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;
const H3 = styled.h3`
  font-weight: 200;
  font-size: 1rem;
  border-bottom: solid #efefef;
  margin-bottom: 0;
`;

const Datetime = styled.div`
  width: 75%;
  p {
    font-weight: 500;
    font-size: 1.2rem;
    span {
      font-weight: 250;
    }
  }
`;

const Count = styled.span`
  width: 5%;
  font-size: 1.3rem;
  color: gray;
`;

const polls = [
  {
    active: true,
    datetime: new Date(),
    count: 3,
    title: "CAMP NOU"
  },
  {
    active: true,
    datetime: new Date(),
    count: 3,
    title: "SAGRADA FAMILIA"
  },
  {
    active: true,
    datetime: new Date(),
    count: 1,
    title: "PARC GÜELL"
  }
];
const Poll = ({ title, active, count, datetime }) => (
  <Fragment>
    <H3>{title}</H3>
    <Flex>
      <Circle active={active} />
      <Datetime>
        <p>
          {moment(datetime).format("dddd, Do MMMM")}
          <br />
          <span>{moment(datetime).format("HH:mm A")}</span>
        </p>
      </Datetime>
      <Count>{count}</Count>
      <FontAwesomeIcon style={{ fontSize: "1.4rem" }} icon={faCaretRight} />
    </Flex>
  </Fragment>
);

const PollsTab = () => (
  <div>
    <div
      style={{
        width: "110%",
        paddingLeft: 20,
        paddingBottom: 10,
        marginTop: "-20px",
        paddingTop: "20px",
        marginLeft: "-20px",
        backgroundColor: "#efefef",
        borderBottom: "solid gray 1px"
      }}
    >
      <h2 style={{ fontSize: "1.8rem" }}>Polls</h2>
    </div>
    <h3>Barcelona</h3>
    {polls.map(poll => (
      <Poll {...poll} />
    ))}
  </div>
);

export default PollsTab;
