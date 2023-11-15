import Wrapper from "../wrappers/Login";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Wrapper className="auth-page">
      <LoginForm></LoginForm>
    </Wrapper>
  );
};

export default Login;
