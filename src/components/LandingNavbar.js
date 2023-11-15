import Wrapper from "../wrappers/LandingNavbar";
import Logo from "./Logo";
import RoundedButton from "./RoundedButton.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <div className="additional_buttons">
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Link to="/about-us">About us</Link>
        <Link to="/support-us">Support this project</Link>
      </div>
      <div className="auth_buttons">
        <Link className='rounded-anchor yellow-bkg' to="/login">
          Log in
        </Link>
        <Link className='rounded-anchor easyBudget-bkg' to="/register">
          Sign up
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
