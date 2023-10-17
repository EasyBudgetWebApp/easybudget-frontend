import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--eb-3F51B5);
  padding-right: 0;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 64px;

  &.logo>p {
    color: var(--eb-3F51B5);
    font-family: var(--baloo-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 92px;
    height: 92px;
  }
`;

export default Wrapper;
