import { Link } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import Wrapper from "../wrappers/Error";
import brokenServer from '../graphics/undraw_server_down_s-4-lk';

const Error = () => {
  return (
    <Wrapper>
      {brokenServer}
      <div className="message">
        <h1>Ups! Page not found...</h1>
        <Link>
          <RoundedButton label="Go Home" className="go-home"></RoundedButton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
