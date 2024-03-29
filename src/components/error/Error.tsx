import "./styles.css";

import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="container error-container">
      <div>Seems like the error has occured</div>
      <Link to={"/"}>Go back to shopping</Link>
    </div>
  );
};

export default ErrorElement;
