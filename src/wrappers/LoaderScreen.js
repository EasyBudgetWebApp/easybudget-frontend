import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: inherit;
  min-height: inherit;

  padding: inherit;

  .loader-spinner {
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
