import Wrapper from "../wrappers/LandingFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright ©2023 GeniusTech - All rights reserved</p>
      <ul>
        <Link to='terms'>
          <li className="vertical-bar">Terms and conditions</li>
        </Link>
        <Link to='privacy-policy'>
          <li className="vertical-bar">Privacy Policy</li>
        </Link>
        <Link to='manage-consent'>
          <li>Manage Cookies</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

export default Footer;
