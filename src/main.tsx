import ReactDom from "react-dom/client";

import "./style.css";

const container: HTMLDivElement = document.querySelector("#root")!;

const root: ReactDom.Root = ReactDom.createRoot(container);

const element = (
<div className="counter">
     <p className="counter__display">0</p>
     <div className="counter__actions">
       <button className="counter__button">Decrement</button>
       <button className="counter__button">Increment</button>
       <button className="counter__button">Reset</button>
     </div>
   </div>
);

root.render(element);