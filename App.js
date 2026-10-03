import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world From React",
);
console.log(heading);

//JSX - HTML-Like or XML-Like syntax
const jsxHeading = <h1 id="heading">Jsx heading</h1>;
console.log(jsxHeading);

const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading">React Fundamentals</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// to render functionnal component
root.render(<HeadingComponent />);
