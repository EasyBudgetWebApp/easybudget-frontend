import { Link } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import Wrapper from "../wrappers/Error";
import serverDown from '../graphics/undraw_server_down_s-4-lk.svg'

const Error = () => {
  return (
    <Wrapper>
      <img src={serverDown} alt='server broken'/>
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
