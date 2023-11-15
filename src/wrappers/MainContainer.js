import styled from "styled-components";
import '@fontsource/roboto';

const Wrapper = styled.div`
  width: 100%;
  height: 606px;
  background-color: var(--yellow);
  display: flex;
  flex: 1 1 auto;

  .info-area {
    flex-grow: 1;
    margin: 80px 0 86px 100px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 46px;
      font-family: var(--baloo-font);
      font-weight: 700;
      width: 597px;
      height: 72px;
      margin: 0;
    }

    ul {
      font-weight: 400;
      margin: 86px 0 86px 0;
      color: var(--eb-17202A);
      height: 7.6875rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        font-family: var(--roboto-font);
        font-size: 28px;
      }
    }
  }

  .graphic-area {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    img {
      height: 570px;
      width: 570px;
      margin-right: 71px;
    }
  }

  .demo-account {
    border-radius: 28px;
    border: 2.4px solid var(--eb-3F51B5);
    width: max-content;
    height: max-content;
    align-self: flex-start;

    color: var(--eb-17202A);
    font-family: var(--roboto-font);
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 500;

    padding: 13px 42px 13px 44px;

    margin-left: 40px;
  }

`;

export default Wrapper;
