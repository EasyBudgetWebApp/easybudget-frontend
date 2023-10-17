import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  img {
    min-width: 30vw;
    max-width: 70vw;
  }
  .message {
    font-family: var(--baloo-font);
    min-width: max-content;
    h1 {
      font-weight: 100;
      font-size: 48px;
    }
    align-self: center;
    .go-home {
      border: none;
      background-color: var(--yellow);
      color: black;
      width: 100%;
    }
  }
`;

export default Wrapper;
