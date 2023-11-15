import Wrapper from "../wrappers/LoginForm";
import Logo from "./Logo";
import Input from "./Input";
import RoundedButton from './RoundedButton';
import HorizontalDelimiter from "./horizontalDelimiter";
import { Link } from "react-router-dom";
import Authenticator from "./authenticator";

//icons
import facebookIcon from '../graphics/facebookIcon';
import googleIcon from '../graphics/googleIcon';
import githubIcon from '../graphics/githubIcon';
import { useEffect, useState } from "react";

const LoginForm = () => {

    const [link, setLink] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = (event) => {
        event.preventDefault();
        console.log('merge');
    }

    //retrieve auth link for google user consent authorization
    /* useEffect(() => {
        //request to http://localhost:5000/api/v1/auth/generate-google-link (nodejs backend);
        async function fetchData() {
            const response = await fetch('http://localhost:5000/api/v1/auth/generate-google-link');
            const decodedLink = await response.json();
            setLink(googleLink => {
                googleLink = decodedLink.link;
                return googleLink;
            });
            setIsLoading(loadingIndicator => {
                loadingIndicator = false
            });
            console.log(decodedLink);
        }
        fetchData();
    }, []);
 */
    /* if (isLoading)
        return <h1>the app is loading</h1> */

    return (
        <Wrapper>
            <Link to='/'>
                <Logo></Logo>
            </Link>
            <p className="form-title">Log in</p>
            <div className="credentials-container">
                <Input className='typeing-input' placeholder='Username or Email' inputType='text' />
                <Input className='typeing-input' placeholder='Password' />
            </div>
            <div className="session-manager">
                <div className="keep-session">
                    <Input inputType={'checkbox'}></Input>
                    <p className="font-normal">Keep me logged in for 30 days!</p>
                </div>
                <Link to='/forgot-password' className="font-normal italic">Forgot password?</Link>
            </div>
            <RoundedButton label='Continue' className={'btn'} onClickHandler={handleClick} />
            <HorizontalDelimiter />
            <div className="oauth-container">
                {/* <Authenticator to={link}> */} <Authenticator to='/'>
                    {googleIcon}
                    Continue with Google
                </Authenticator>
                <Authenticator to='/facebook-auth'>
                    {facebookIcon}
                    Continue with Facebook
                </Authenticator>
                <Authenticator to='/github-auth'>
                    {githubIcon}
                    Continue with Github
                </Authenticator>
            </div>
            <p className="redirect-login">Don’t have an account? <Link to='/register'>Sign up</Link></p>
        </Wrapper>
    )
}

export default LoginForm;