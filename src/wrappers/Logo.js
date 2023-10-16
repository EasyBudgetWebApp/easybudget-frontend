import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    color: var(--budget-purple);
    width: 241px;
    height: 80px;
    padding-right: 0;
    gap: 10px;
    flex-shrink: 0;
    margin-left: 64px;
    font-size: 28px;
    font-weight: 500;
    font-family: var(--baloo-font);
    line-height: 43.79px;
    font-weight: bold;

    img {
        width: 80px;
        height: 80px;
    }
`;

export default Wrapper;