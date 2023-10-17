import styled from "styled-components";

const Wrapper = styled.div`
    background-color: var(--eb-F9F9F9);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 25px;
    flex: 0 1 140px;
    min-height: 120px;

    p {
        font-size: 24px;
        font-family: var(--eb-17202A);
        font-weight: 400;
    } 

    ul {
        list-style-type: none;
        display: flex;
        li {
            font-size: 24px;
            font-weight: 500;
            color: var(--eb-17202A);
        }
    }

    .vertical-bar::after {
        content: '|';
        padding: 8px;
    }
`;

export default Wrapper; 