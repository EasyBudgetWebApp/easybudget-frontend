import Wrapper from "../wrappers/Login";
import LoginForm from "../components/LoginForm";
import LoaderScreen from "../components/LoaderScreen";

const Login = () => {
  return (
    <Wrapper className="auth-page">
      <LoaderScreen className='cover-on-auth'/>
      <LoginForm></LoginForm>
    </Wrapper>
  );
};

export default Login;
