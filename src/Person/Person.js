import React, { Component } from "react";

const person = props => {
  return (
    <div>
      <p>
        Hi my name is {props.name}, and I am a {props.profession}. Boy.
      </p>
      <strong>{props.children}</strong>
    </div>
  );
};

export default person;
