import React from "react";
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    }
    console.log("Child constructore")
  }

  async componentDidMount() {
    console.log("Child component did mount")
    const data = await fetch("https://api.github.com/users/jitendra253");
    const json = await data.json();
    this.setState({
      userInfo: json
    })
  }

  componentDidUpdate() {
    console.log("child component did update")
  }
  componentWillUnmount() {
    console.log("child component will unmount")
  }
  render() {
    console.log("Child render")

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Concate: @jitendra34</h4>
      </div>
    )
  }
}




/*

-------Mounting--------------
- constructor is called 
- render(dummy)\
      -Dummy Html
- component Did Mount
      -<ApiCall>
      <this.setState> -> State variable is updated

---------Update-------------

    -render(API data)
    -<Html>(new APi data)
-Component  Did update
  
*/
export default UserClass;