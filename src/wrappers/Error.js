import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 75%;
    min-width: 900px;
  }

  .message {
    display: flex;
    width: 35%;
    min-width: 350px;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: var(--baloo-font);
      font-weight: 500;
    }
    a {
      width: 50%;
      min-width: max-content;
      text-align: center;
      border: none;
    }
  }
`;

export default Wrapper;
