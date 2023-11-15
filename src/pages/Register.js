import RegisterForm from "../components/RegisterForm";
import Wrapper from "../wrappers/Register";

const Register = () => {
  return (
    <Wrapper className="auth-page">
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
