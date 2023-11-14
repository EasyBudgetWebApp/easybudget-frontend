import styled from "styled-components";

const Wrapper = styled.a`
    border: 2px solid var(--yellow);
    width: 100%;
    border-radius: 28px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--roboto-font);
    font-size: 20px;
    font-weight: 500;
    svg {
        width: 24px;
        height: 24px;
        margin: 16px;
    }
`;

export default Wrapper;