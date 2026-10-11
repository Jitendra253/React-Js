import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props)
    console.log("Parent constructore")
  }
  componentDidMount() {
    console.log("parent component did mount")
  }
  render() {
    console.log("parent Render")
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={"First"} location={"BBSR"} />
        <UserClass name={"Second"} location={"BBSR"} />
      </div>
    );
  }
}

/*
  -Parent Constructor
  -Parent Render
    -First Child Constructore
    -First Child Render

    -Second Child Constructore
    -Second Shild Render

    -First Child component Did mount
    -Second Child Component Did mount

    -Parent Component Did mount
 */

export default About;
