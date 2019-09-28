import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import DatePicker from "react-mobile-datepicker";
import PollUsers from "./pollUsers.jsx";

const Flex = styled.div`
  display: Flex;
  justify-content: space-between;
  border-bottom: solid #efefef;
  align-items: center;
`;

const Circle = styled.div`
  border: solid gray;
  border-radius: 30px;
  height: 30px;
  width: 30px;
  margin-right: 20px;
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

const Poll = ({ id, activate, open, active, count, datetime }) => (
  <Flex>
    <Circle active={active} onClick={() => activate(id)} />
    <Datetime>
      <p>
        {moment(datetime).format("dddd, Do MMMM")}
        <br />
        <span>{moment(datetime).format("HH:mm A")}</span>
      </p>
    </Datetime>
    <Count>{count}</Count>
    <FontAwesomeIcon
      onClick={open}
      style={{ fontSize: "1.4rem" }}
      icon={faCaretRight}
    />
  </Flex>
);

const Add = styled.button`
  background-color: #ff5c5d;
  font-size: 2rem;
  color: white;
  border-radius: 60px;
  height: 60px;
  width: 60px;
  line-height: 10px;
  margin: 20px 0px 20px 0px;
  position: absolute;
  right: 0;
  cursor: pointer;
  border: none;
  text-align: center;
`;

class Polls extends Component {
  state = {
    time: new Date(),
    isOpen: false,
    pollUsersIsOpen: false,
    polls: [
      {
        active: false,
        datetime: new Date(),
        count: 3
      },
      {
        active: false,
        datetime: new Date(),
        count: 1
      }
    ]
  };

  handleSelect = datetime => {
    const polls = this.state.polls;
    polls.push({
      active: true,
      datetime,
      count: 1
    });
    this.setState({ isOpen: false });
  };

  activate = id => {
    const polls = this.state.polls;
    if (polls[id].active) {
      polls[id].active = false;
      polls[id].count -= 1;
    } else {
      polls[id].active = true;
      polls[id].count += 1;
    }
    this.setState(polls);
  };

  render() {
    return (
      <div style={{ position: "relative", marginBottom: 100 }}>
        <H2>Polls</H2>
        {this.state.polls.map((poll, id) => (
          <Poll
            open={() => this.setState({ pollUsersIsOpen: true })}
            activate={this.activate}
            {...poll}
            id={id}
          />
        ))}
        <Add onClick={() => this.setState({ isOpen: true })}>+</Add>
        <DatePicker
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={() => this.setState({ isOpen: false })}
          theme="ios"
          showHeader={false}
          confirmText="Select"
          cancelText="Cancel"
        />
        {this.state.pollUsersIsOpen && (
          <PollUsers
            {...this.state.polls[2]}
            close={() => this.setState({ pollUsersIsOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default Polls;
