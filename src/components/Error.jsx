import { useRouteError } from "react-router-dom";
const Error = () => {

  // ! It gives more  information about the error 
  const err = useRouteError();
  console.log(err)
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Something Went Wrong!!</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )

}
export default Error;