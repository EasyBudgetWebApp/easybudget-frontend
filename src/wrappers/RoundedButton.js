import styled from "styled-components";

const Wrapper = styled.div`
    font: var(--roboto-font);
    color: var(--eb-17202A);
    font-size: 24px;
    font-weight: 500;
    border-radius: 28px;
    width: 168px;
    height: 58px;
    border: 2.5px solid var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;

    &.sign-up {
        background-color: var(--budget-purple);
        color: var(--yellow);
        border: none;
    }

    &.log-in {
        background-color: var(--yellow);
    }
`;

export default Wrapper;