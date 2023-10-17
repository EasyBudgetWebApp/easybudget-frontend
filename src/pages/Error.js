import { Link } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import serverDown from "../graphics/undraw_server_down_s4lk.png";
import Wrapper from "../wrappers/Error";

const Error = () => {
  return (
    <Wrapper>
      <img alt="server down" src={serverDown}></img>
      <div class="message">
        <h1>Ups! Page not found...</h1>
        <Link>
          <RoundedButton label="Go Home" className="go-home"></RoundedButton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
