// <div id="root">
//   <div class="counter">
//     <p class="counter__display">0</p>
//     <div class="counter__actions">
//       <button class="counter__button">Decrement</button>
//       <button class="counter__button">Increment</button>
//       <button class="counter__button">Reset</button>
//     </div>
//   </div>
// </div>

import React, { type ReactElement } from "react";
import ReactDom from "react-dom/client";

import "./style.css";

const container: HTMLDivElement = document.querySelector("#root")!;

const root: ReactDom.Root = ReactDom.createRoot(container);

const buttonDiv: ReactElement = React.createElement(
  "div",
  {className: "counter__actions"},
  React.createElement("button", {className: "counter__button"}, "Decrement"),
  React.createElement("button", {className: "counter__button"}, "Increment"),
  React.createElement("button", {className: "counter__button"}, "Reset"),
);

const counterDiv: ReactElement = React.createElement(
  "div",
  {className: "counter"},
  React.createElement("p", {className:"counter__display"},0),
  buttonDiv
);

root.render(counterDiv);

// const element: ReactElement = React.createElement(
//   "div",
//   { className: "container"},
//   "Hola Mundo",
//   React.createElement("h2", null, "Hola Mundo"),
// );

// root.render(element)
