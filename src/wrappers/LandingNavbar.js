import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--eb-80CBC4);
  flex: 0 1 140px;
  min-height: 120px;

  display: flex;
  justify-content: space-between;

  .additional_buttons {
    display: flex;
    align-items: center;
    column-gap: 52px;
    font-weight: 500;
    font-size: 22px;
    line-height: 25.78px;
    color: var(--eb-17202A);
  }

  .auth_buttons {
    display: flex;
    align-items: center;
    margin-right: 57px;
    column-gap: 28px;
  }

  h1 {
    margin: 0;
  }

  a {
    border: none;
  }

  a[href="/register"]{
    color: var(--yellow);
  }
`;

export default Wrapper;
