import Wrapper from "../wrappers/RegisterForm";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Authenticator from "./authenticator";
import Input from "./Input";
import RoundedButton from "./RoundedButton";

//react specific
import { useState, useEffect } from "react";

//icons
import googleIcon from "../graphics/googleIcon";
import githubIcon from "../graphics/githubIcon";
import facebookIcon from "../graphics/facebookIcon";
import HorizontalDelimiter from "./horizontalDelimiter";

//utils
import fetchLink from "../utils/fetchAuthLink";
import LoaderScreen from "./LoaderScreen";

const RegisterForm = () => {
  const [link, setLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState({ state: false, reason: false });

  useEffect(() => {
    fetchLink({
      url: "http://localhost:5000/api/v1/auth/generate-google-link",
      setErrFlag: setHasError,
      setLink,
      setLoadFlag: setIsLoading,
    });
  }, []);

  const handleCreateAccount = () => {
    alert("Account Created");
  };

  return (
    <>
    {isLoading && <LoaderScreen className="cover-on-auth"/>}
      <Wrapper>
        <Link to="/landing-page">
          <Logo />
        </Link>
        <h2 className="form-title normalize-font">Create your account</h2>
        <div className="authenticators">
          <Authenticator to={link}>{googleIcon}</Authenticator>
          <Authenticator to="/landing-page">{facebookIcon}</Authenticator>
          <Authenticator to="/landing-page">{githubIcon}</Authenticator>
        </div>
        <HorizontalDelimiter />
        <Input
          name="name"
          inputType="text"
          placeholder="Name"
          className="typeing-input"
        />
        <Input
          name="email"
          inputType="text"
          placeholder="Email"
          className="typeing-input"
        />
        <Input
          name="password"
          inputType="password"
          placeholder="Password"
          className="typeing-input"
        />
        <div className="options-layout">
          <input type="checkbox" id="terms-and-conditions"></input>
          <label htmlFor="terms-and-conditions">
            I accept the <Link to="/terms-and-conditions">Terms of Use</Link>
          </label>
        </div>
        <div className="options-layout">
          <input type="checkbox" id="privacy-policy"></input>
          <label htmlFor="privacy-policy">
            I acknowledge that my information will be used in accordance with
            the <Link>Privacy Policy</Link> and <Link>Cookie Policy</Link>
          </label>
        </div>
        <RoundedButton
          label="Create account"
          className={"btn"}
          onClickHandler={handleCreateAccount}
        />
        <p className="log-in">
          Aleardy have an account? <Link to="/login">Log in</Link>
        </p>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
