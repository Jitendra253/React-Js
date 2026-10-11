import React from "react";
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    console.log(this.props.name + "child constructore called")
  }

  componentDidMount() {
    console.log(this.props.name + "Child component did mount")
  }

  render() {
    console.log(this.props.name + "child render called")
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={() => {
          //? Never ever do this.state.count = this.state.count+1;
          this.setState({
            count: this.state.count + 1,
          })
        }}>Increase</button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Concate: @jitendra34</h4>
      </div>
    )
  }
}

export default UserClass;