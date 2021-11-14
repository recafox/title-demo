import React from "react";
import ReactDOM from "react-dom";

var GreetButton = function GreetButton(name) {
  return React.createElement(
    "button",
    {
      disabled: true,
    },
    "Hello, ",
    name
  );
};

var App = function App() {
  var style = {
    backgroundColor: "blue",
    color: "white",
  };
  var buttonText = {
    text: "hey",
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        htmlFor: "name",
        className: "label",
      },
      "Enter name:"
    ),
    React.createElement("input", {
      id: "name",
      type: "text",
    }),
    React.createElement(
      "button",
      {
        style: style,
      },
      buttonText.text
    ),
    React.createElement(GreetButton, {
      name: "anna",
    })
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector("#root")
);
