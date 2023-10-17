import Wrapper from "../wrappers/LoginForm";
import Logo from "./Logo";
import Input from "./Input";
import RoundedButton from './RoundedButton';

const LoginForm = () => {
    return (
        <Wrapper>
           <Logo/> 
           <p className="form-title">Log in</p>
           <div className="credentials-container">
                <Input className='typeing-input' placeholder='Username or Email' inputType='text'/>
                <Input className='typeing-input' placeholder='Password'/>
           </div>
           <div className="keep-session">
                <Input inputType={'checkbox'}></Input>
                <p>Keep me logged in for 30 days!</p>
           </div>
           <RoundedButton label='Log in' className={'btn'}/>
           <p className="third-party">OR LOGIN WITH</p>
           <p className="forgot-password">Forgot password</p>
           <p className="redirect-login">Don’t have an account? <p className="underlined">Sign up</p></p>
        </Wrapper>
    )
}

export default LoginForm;