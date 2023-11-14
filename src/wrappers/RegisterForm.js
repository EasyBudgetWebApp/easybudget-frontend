import styled from "styled-components";

const Wrapper = styled.form`
  //dimensions
  width: 100%;
  height: 100%;
  max-width: 720px;
  max-height: 806px;
  min-width: 720px;
  min-height: 806px;

  //bg-color
  background-color: white;

  //display and positioning
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 22px;
  padding: 20px 104px 32px;
  border-radius: 8px;

  //font
  font-family: var(--roboto-font);

  .normalize-font {
    font-style: normal;
    line-height: 32px;
  }

  .form-title {
    font-size: 28px;
    font-weight: 400;
    color: var(--eb-17202A);
  }

  //logo styling
  .logo {
    margin: 0;
    width: 206px;
    height: 78px;

    img {
      width: 74px;
      height: 74px;
    }
  }

  //authenticators
  .authenticators {
    width: 260px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    a {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      border: 1px solid var(--yellow);
    }
  }

  //delimiter
  .horizontal-delimiter {
    margin: 6px;
    padding: 0 50px;
  }

  //input
  .typeing-input {
    padding-left: 0;
    margin: 0;
    margin-top: 6px;
  }

  //options (checkbox options)
  .options-layout {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    column-gap: 13px;
    margin-top: 6px;
    a {
      text-decoration: underline;
    }

    input[type='checkbox'] {
        width: 30px !important;
        height: 30px !important;
        min-width: 30px;
    }

    input[type='checkbox']:hover {
        cursor: pointer;
    }
  }

  //button
  .btn{
    width: 100%;
    margin-top: 6px;
    background-color: var(--eb-3F51B5);
    border: none;
    color: var(--yellow);
    font-size: 22px;
  }

  .log-in {
    font-size: 22px;
    margin-top: 5px;
    a {
        text-decoration: underline;
    }
  }
`;

export default Wrapper;
