import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import sagrada from "../images/sagradaFamilia.png";

const Container = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 600px;
  padding-bottom: 40px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid #efefef;
  margin-left: 30px;
`;
const Datetime = styled.div`
  width: 75%;
  margin-left: 30px;
  p {
    font-weight: 500;
    font-size: 1.4rem;
    span {
      font-weight: 250;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #efefef;
  border-radius: 20px 20px 0 0;
  padding: 5px;
  border-bottom: solid lightgray;

  a {
    padding-left: 15px;
    color: #147efb;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Dark = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const MyMember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 70px;
    height: 70px;
    width: 70px;
    margin-right: 30px;
  }

  span {
    font-size: 1.6rem;
    width: 80%;
  }

  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: solid #efefef;
`;

const Member = ({ img, name }) => (
  <MyMember>
    <img src={img} />
    <span>{name}</span>
    <FontAwesomeIcon style={{ fontSize: "2.5rem" }} icon={faCaretRight} />
  </MyMember>
);

const PollUsers = ({ close, users, datetime }) => (
  <Fragment>
    <Dark />
    <Container>
      <Header>
        <a onClick={close}>Cancel</a>
        <h3>Camp Nou</h3>
        <div />
      </Header>
      <Flex>
        <FontAwesomeIcon
          style={{ color: "#ff5c5d", fontSize: "3rem" }}
          icon={faCalendarAlt}
        />
        <Datetime>
          <p>
            {moment(datetime).format("dddd, Do MMMM")}
            <br />
            <span>{moment(datetime).format("HH:mm A")}</span>
          </p>
        </Datetime>
      </Flex>
      <div style={{ margin: "0 30px 0 30px" }}>
        <h3 style={{ fontSize: "1.4rem" }}>Members</h3>
        <Member img={sagrada} name="Dirk Hornung" />
        <Member img={sagrada} name="Lisa Hornung" />
      </div>
    </Container>
  </Fragment>
);

export default PollUsers;
