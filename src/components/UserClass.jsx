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

      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <img
          src={avatar_url}
          alt={`${name}'s avatar`}
          className="mx-auto h-28 w-28 rounded-full border-4 border-orange-100 object-cover"
        />

        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Name: <span className="font-semibold">{name}</span>
        </h2>

        <h3 className="mt-2 text-base text-gray-600">
          Location: <span className="font-medium">{location}</span>
        </h3>

        <h4 className="mt-3 text-sm font-medium text-orange-600">
          Contact: @jitendra34
        </h4>
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