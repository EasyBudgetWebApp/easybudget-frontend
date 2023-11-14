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
    h1 {
      font-size: 46px;
      font-family: var(--baloo-font);
      font-weight: 700;
      width: 597px;
      height: 72px;
      margin: 0;
    }

    ul {
      font-family: 'Roboto', sans-serif;
      font-size: 28px;
      font-weight: 400;
      margin: 86px 0 86px 0;
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
    border: 2.4px solid var(--eb-3F51B5);
    width: 372px;
    height: 58px;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
  }
`;

export default Wrapper;
