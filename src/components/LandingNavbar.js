import Wrapper from "../wrappers/LandingNavbar";
import Logo from "./Logo";
import RoundedButton from './RoundedButton.js';

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
      <div className='auth_buttons'>
        <RoundedButton label={'Log in'}></RoundedButton>
        <RoundedButton label={'Sign up'} className={'sign-up'}></RoundedButton>
      </div>
    </Wrapper>
  );
};

export default Header;
