import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Sorry, Not found :(</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

export default NotFound;
