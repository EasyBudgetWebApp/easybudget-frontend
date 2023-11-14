import styled from "styled-components";

const Wrapper = styled.form`
  width: 720px;
  height: 806px;
  background-color: #ffffff;
  padding: 20px 104px 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: var(--roboto-font);
  }

  .form-title {
    margin: 19px 0 33px 0;
    font-size: 28px;
    font-weight: 400;
  }

  .session-manager {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 33px;

    .font-normal {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .italic {
      font-family: var(--roboto-font);
      font-style: italic;
    }

    a:link,
    a:visited,
    a:hover,
    a:active,
    a:focus {
      font-family: var(--roboto-font);
      text-decoration: none;
      color: var(--eb-17202A);
    }
  }

  .keep-session {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin: 0;
      margin-right: 13px;
      border-radius: 8px;
      width: 36px;
      height: 36px;
      border: 1px solid var(--eb-17202A);
    }
    input[type="checkbox"]:hover {
      cursor: pointer;
    }
  }

  .btn {
    font-family: var(--roboto-font);
    font-size: 24px;
    font-weight: 500;
    width: 100%;
    background-color: var(--eb-3F51B5);
    color: var(--yellow);
    border: none;
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

  .logo {
    margin: 0;
    width: 206px;
    height: 78px;
    p{
      font-size: 24px;
    }
    img {
      width: 74px;
      height: 74px;
    }
  }

  .oauth-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    font-family: var(--roboto-font);
    font-weight: 500;
    margin-bottom: 18px;
  }

  .horizontal-delimiter {
    padding: 0 42px;
  }
`;

export default Wrapper;
