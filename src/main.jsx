import { createRoot } from "react-dom/client";
console.log("main start");

let element = (
  <h1>
    hello <span style={{ color: "red" }}>world</span>
  </h1>
);

console.log("element", element);
const root = createRoot(document.querySelector("#root"));
console.log("root", root);
// root.render(element);
