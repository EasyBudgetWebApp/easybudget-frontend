import Wrapper from "../wrappers/LoginForm";
import Logo from "./Logo";
import Input from "./Input";
import RoundedButton from "./RoundedButton";
import HorizontalDelimiter from "./horizontalDelimiter";
import { Link } from "react-router-dom";
import Authenticator from "./authenticator";

//icons
import facebookIcon from "../graphics/facebookIcon";
import googleIcon from "../graphics/googleIcon";
import githubIcon from "../graphics/githubIcon";
import { useEffect, useState } from "react";
import LoaderScreen from "./LoaderScreen";

//utils
import fetchLink from "../utils/fetchAuthLink";

const LoginForm = () => {
  const [link, setLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState({ state: false, reason: false });

  const handleClick = (event) => {
    event.preventDefault();
    console.log("merge");
  };

  useEffect(() => {
    fetchLink({
      url: "http://localhost:5000/api/v1/auth/generate-google-link",
      setErrFlag: setHasError,
      setLink,
      setLoadFlag: setIsLoading,
    });
  }, []);

  return (
    <>
      {isLoading && <LoaderScreen className="cover-on-auth" />}
      <Wrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <p className="form-title">Log in</p>
        <div className="credentials-container">
          <Input
            className="typeing-input"
            placeholder="Username or Email"
            inputType="text"
          />
          <Input className="typeing-input" placeholder="Password" />
        </div>
        <div className="session-manager">
          <div className="keep-session">
            <Input inputType={"checkbox"}></Input>
            <p className="font-normal">Keep me logged in for 30 days!</p>
          </div>
          <Link to="/forgot-password" className="font-normal italic">
            Forgot password?
          </Link>
        </div>
        <RoundedButton
          label="Continue"
          className={"btn"}
          onClickHandler={handleClick}
        />
        <HorizontalDelimiter />
        <div className="oauth-container">
          <Authenticator to={link}>
            {googleIcon}
            Continue with Google
          </Authenticator>
          <Authenticator to="/facebook-auth">
            {facebookIcon}
            Continue with Facebook
          </Authenticator>
          <Authenticator to="/github-auth">
            {githubIcon}
            Continue with Github
          </Authenticator>
        </div>
        <p className="redirect-login">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </Wrapper>
    </>
  );
};

export default LoginForm;
