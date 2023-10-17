import styled from "styled-components";

const Wrapper = styled.form`
  width: 720px;
  height: 743px;
  margin-top: 69px;
  background-color: #ffffff;
  padding: 32px 89px 0 89px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: var(--roboto-font);
  }

  .form-title {
    margin: 19px 0 33px 0;
    font-size: 24px;
    font-weight: 400;
  }

  .keep-session {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 33px;

    input[type="checkbox"] {
      margin: 0;
      margin-right: 13px;
      border-radius: 8px;
      width: 36px;
      height: 36px;
    }
    input[type="checkbox"]:hover {
      cursor: pointer;
    }

    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .btn {
    font-family: var(--roboto-font);
    font-size: 24px;
    font-weight: 400;
    width: 100%;
    background-color: var(--eb-3F51B5);
    color: var(--yellow);
    border: none;
    margin-bottom: 21px;
  }

  .third-party {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 106px;
  }

  .forgot-password {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 18px;
  }

  .underlined {
    display: inline;
    text-decoration: underline;
  }

  .redirect-login {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default Wrapper;
