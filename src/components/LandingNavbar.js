import Wrapper from "../wrappers/LandingNavbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <div className="additional_buttons">
        <a href='/'>
          <Logo></Logo>
        </a>
        <a href='/about-us'>About us</a>
        <a href='/support-us'>Support this project</a>
      </div>
    </Wrapper>
  );
};

export default Header;
